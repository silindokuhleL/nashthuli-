import { Product, Category } from '../types';
import { allImages } from './images';

// ── Per-category price ranges (R) ────────────────────────────────────────────
const priceRange: Record<string, [number, number]> = {
  Couches:        [7500,  18500],
  Beds:           [8500,  17000],
  Headboards:     [2800,   5800],
  Tables:         [3200,   9500],
  'TV Stands':    [5000,  13500],
  'Kitchen Units':[7500,  28000],
};

// ── Per-category name pools ───────────────────────────────────────────────────
const names: Record<string, string[]> = {
  Couches: [
    'Velvet L-Shape Suite', 'Chesterfield Sofa', 'Channel-Stitch Suite',
    'Bespoke Velvet Couch', 'Luxe 3-Seater', 'Designer Sectional',
    'Curved Velvet Sofa', 'Statement Corner Couch', 'Rolled-Arm Sofa',
    'Tufted Chesterfield', 'Custom Fabric Couch', 'Deep-Seat L-Shape',
  ],
  Beds: [
    'Wingback King Bed', 'Button-Tufted Bed Frame', 'Channel-Stitch Bed',
    'Velvet Queen Bed', 'Upholstered Bed Set', 'Luxury Double Bed',
    'Custom Wingback Bed', 'Designer Bed Frame',
  ],
  Headboards: [
    'Fan-Shell Headboard', 'Button-Tufted Headboard', 'Angular Panel Headboard',
    'Mirror-Insert Headboard', 'Velvet Wing Headboard', 'Geometric Headboard',
    'Channel-Stitch Headboard', 'Custom Velvet Headboard', 'Fluted Headboard',
    'Art-Deco Headboard', 'Quilted Headboard', 'Statement Headboard',
  ],
  Tables: [
    'Bedside Pedestals', 'Dressing Table Set', 'Mirrored Chest',
    'Gold-Frame Pedestals', 'Storage Pedestals', 'Vanity Table Set',
    'Bedside Table', 'Drawer Chest',
  ],
  'TV Stands': [
    'LED TV Wall Unit', 'Floating TV Console', 'Media Wall Unit',
    'Entertainment Console', 'Custom TV Unit', 'Built-In TV Stand',
  ],
  'Kitchen Units': [
    'Custom Kitchen Cupboards', 'Kitchen Island Unit', 'Kitchen Cabinet Set',
    'Storage Console', 'Fitted Kitchen Unit', 'Kitchen Wall Units',
  ],
};

// ── Per-category descriptions ─────────────────────────────────────────────────
const descs: Record<string, string[]> = {
  Couches: [
    'Luxuriously upholstered in premium velvet with gold accent legs. Available in custom colours and sizes.',
    'Handcrafted Chesterfield with deep button tufting. A timeless statement piece for any living room.',
    'Contemporary channel-stitch sofa with plush cushioning. Perfectly sized for modern family living.',
    'Bespoke L-shape sectional with matching scatter cushions. Custom dimensions on request.',
    'Velvet curved sofa with slender metal legs. Elegant yet functional for any space.',
  ],
  Beds: [
    'King-size upholstered bed with tall wingback headboard. Optional hydraulic storage base available.',
    'All-over button-tufted bed frame in premium velvet. Custom fabric and size options.',
    'Channelled velvet bed with gold accent legs. A centrepiece for any master bedroom.',
    'Bespoke upholstered bed — any size, any colour, any fabric. Crafted to your exact specs.',
  ],
  Headboards: [
    'Custom-designed headboard crafted to your exact specifications. Available in any fabric and size.',
    'Sculptural upholstered headboard with unique panelling. Transforms any bedroom instantly.',
    'Fan-shell headboard with gold column trim. Pairs beautifully with matching bedside pedestals.',
    'Angular geometric headboard with contrast piping. Bold and contemporary.',
    'Fully upholstered velvet headboard. Available in king, queen, double, and single.',
  ],
  Tables: [
    'Bespoke bedside pedestals with drawer storage. Custom finishes and hardware available.',
    'Complete dressing table set with mirror, stool, and chest. Made to order.',
    'Mirrored chest of drawers with crystal-knob handles. Hollywood Regency glamour.',
    'White high-gloss storage pedestals. Push-to-open mechanism, pairs with any bed.',
  ],
  'TV Stands': [
    'Full-height floating TV wall unit with LED cove lighting. Fits any TV up to 85".',
    'Bespoke TV console with slatted panel cladding and integrated cable management.',
    'Custom-built entertainment wall unit. Designed to your exact room dimensions.',
  ],
  'Kitchen Units': [
    'Custom kitchen cupboards with soft-close hinges. Available in any colour and finish.',
    'Freestanding kitchen island with storage drawers and bar overhang. Custom sizing.',
    'Full fitted kitchen unit with top and base cupboards. Granite countertop optional.',
  ],
};

const PRODUCT_CATS = new Set<string>(['Couches','Beds','Headboards','Tables','TV Stands','Kitchen Units']);

function seededPrice(base: number, max: number, seed: number): number {
  const steps = Math.floor((max - base) / 500);
  return base + (seed % (steps || 1)) * 500;
}

export const products: Product[] = allImages
  .filter(img => PRODUCT_CATS.has(img.category))
  .map((img, i) => {
    const cat = img.category as Category;
    const [base, max] = priceRange[cat] ?? [5000, 15000];
    const price = seededPrice(base, max, i * 37 + 11);
    const hasDiscount = i % 4 === 0;
    const nameList = names[cat] ?? ['Bespoke Furniture'];
    const descList = descs[cat] ?? ['Crafted to your exact specifications.'];
    const badge =
      i % 9 === 0 ? 'Best Seller' :
      i % 13 === 0 ? 'New Arrival' :
      i % 17 === 0 ? 'Premium' :
      undefined;

    return {
      id: i + 1,
      name: `${nameList[i % nameList.length]}`,
      category: cat,
      price,
      originalPrice: hasDiscount ? Math.round(price * 1.22 / 500) * 500 : undefined,
      image: img.src,
      description: descList[i % descList.length],
      badge,
    };
  });
