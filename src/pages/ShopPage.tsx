import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Category } from '../types';

const categories: Category[] = ['All', 'Couches', 'Beds', 'Tables', 'TV Stands', 'Headboards', 'Kitchen Units'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under R5,000', min: 0, max: 5000 },
  { label: 'R5,000 – R10,000', min: 5000, max: 10000 },
  { label: 'R10,000 – R20,000', min: 10000, max: 20000 },
  { label: 'Over R20,000', min: 20000, max: Infinity },
];

const PAGE_SIZE = 24;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [priceRange, setPriceRange] = useState(0);
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [discountOnly, setDiscountOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const range = priceRanges[priceRange];
    return products.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchPrice = p.price >= range.min && p.price <= range.max;
      const matchSearch = search === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
      const matchDiscount = !discountOnly || !!p.originalPrice;
      return matchCat && matchPrice && matchSearch && matchDiscount;
    });
  }, [activeCategory, priceRange, search, discountOnly]);

  const resetPage = () => setVisibleCount(PAGE_SIZE);
  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Page header */}
      <div className="bg-green-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-wood-300 uppercase tracking-widest text-sm font-semibold mb-3">Our Catalogue</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">Shop Our Collection</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every piece is crafted to order. Enquire via WhatsApp to discuss custom sizes, colours, and finishes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search + Filter toggle */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-11 pr-10 py-3 border border-cream-200 bg-white rounded-xl text-sm focus:outline-none focus:border-wood-400 transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all ${
              showFilters ? 'bg-wood-400 text-white border-wood-400' : 'bg-white border-cream-200 text-charcoal-800 hover:border-wood-400'
            }`}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="bg-white rounded-2xl p-5 mb-6 border border-cream-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Price Range</p>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((r, i) => (
                    <button
                      key={r.label}
                      onClick={() => { setPriceRange(i); resetPage(); }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        priceRange === i ? 'bg-wood-400 text-white' : 'bg-cream-100 text-charcoal-700 hover:bg-cream-200'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Special Offers</p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    onClick={() => setDiscountOnly(!discountOnly)}
                    className={`w-10 h-6 rounded-full transition-colors duration-200 relative ${discountOnly ? 'bg-wood-400' : 'bg-gray-200'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${discountOnly ? 'translate-x-5' : 'translate-x-1'}`} />
                  </div>
                  <span className="text-sm text-charcoal-700">Show discounted items only</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); resetPage(); }}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-green-900 text-white shadow'
                  : 'bg-white text-charcoal-700 border border-cream-200 hover:border-wood-400 hover:text-wood-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing <span className="font-semibold text-charcoal-900">{Math.min(visibleCount, filtered.length)}</span> of{' '}
          <span className="font-semibold text-charcoal-900">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visible.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {visibleCount < filtered.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                  className="btn-secondary px-10 py-3.5"
                >
                  Load More ({filtered.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="font-serif text-xl text-charcoal-800 mb-2">No products found</h3>
            <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search term.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearch(''); setPriceRange(0); setDiscountOnly(false); resetPage(); }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Custom order CTA */}
        <div className="mt-16 bg-green-800 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-wood-300 uppercase tracking-widest text-xs font-semibold mb-3">Don't see what you need?</p>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">
            We Build Custom Furniture
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Tell us your vision — dimensions, materials, colours — and we will craft it exclusively for you.
          </p> 
          <a
            href="https://wa.me/27614300608?text=Hi%20Nashthul!%20I%27d%20like%20to%20request%20a%20custom%20furniture%20piece."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.96 0-3.791-.528-5.368-1.449l-.385-.229-3.985.944.999-3.878-.251-.398A9.789 9.789 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Request Custom Order
          </a>
        </div>
      </div>
    </div>
  );
}
