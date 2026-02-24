import { MessageCircle, Tag } from 'lucide-react';
import { Product } from '../types';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const waMessage = encodeURIComponent(
    `Hi Nashthul! I'm interested in the *${product.name}* (R${product.price.toLocaleString()}). Can you give me more details?`
  );

  return (
    <div className="card group overflow-hidden">
      <div className="relative overflow-hidden bg-cream-100 aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-wood-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Tag size={10} />
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-wood-400 text-xs font-semibold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-charcoal-900">
              R{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 text-sm line-through ml-2">
                R{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <a
          href={`https://wa.me/27614300608?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center text-sm"
        >
          <MessageCircle size={16} />
          Enquire via WhatsApp
        </a>
      </div>
    </div>
  );
}
