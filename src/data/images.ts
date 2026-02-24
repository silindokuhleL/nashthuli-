// ── Named imports for hero / products / about pages ──────────────────────────
import couch1  from '../assets/images/coaches/IMG_4313.jpg';
import couch2  from '../assets/images/chairs/IMG_3920.JPG';
import couch3  from '../assets/images/coaches/IMG_4307.jpg';
import couch4  from '../assets/images/coaches/IMG_4309.jpg';
import couch5  from '../assets/images/coaches/IMG_4312.jpg';
import couch6  from '../assets/images/coaches/IMG_4370.jpg';
import couch7  from '../assets/images/coaches/IMG_4379.jpg';
import couch8  from '../assets/images/coaches/IMG_4652.jpg';
import couch9  from '../assets/images/coaches/IMG_4654.jpg';
import couch10 from '../assets/images/coaches/IMG_4464.jpg';
import couch11 from '../assets/images/coaches/IMG_4380.jpg';
import couch12 from '../assets/images/coaches/IMG_4378.jpg';

import bed1 from '../assets/images/beds/IMG_4311.jpg';
import bed2 from '../assets/images/beds/IMG_4334.jpg';

import headboard1 from '../assets/images/headboards/IMG_3172.jpg';
import headboard2 from '../assets/images/headboards/IMG_3174.jpg';
import headboard3 from '../assets/images/headboards/IMG_3173.jpg';
import headboard4 from '../assets/images/headboards/IMG_3168.jpg';
import headboard5 from '../assets/images/headboards/IMG_3190.jpg';
import headboard6 from '../assets/images/headboards/IMG_4877.PNG';

import pedestal1 from '../assets/images/beds/IMG_3164.jpg';
import pedestal2 from '../assets/images/beds/IMG_3165.jpg';
import pedestal3 from '../assets/images/beds/IMG_3166.jpg';
import pedestal4 from '../assets/images/headboards/IMG_3167.jpg';
import pedestal5 from '../assets/images/headboards/IMG_3169.jpg';
import pedestal6 from '../assets/images/TV stands /IMG_3171.jpg';

import tvstand1 from '../assets/images/TV stands /IMG_4367.jpg';

// ── Named exports (used by hero / products / about) ───────────────────────────
export const couches = {
  emeraldSuite: couch1,
  greyLShape: couch2,
  greyFabricSet: couch3,
  navyCurved: couch4,
  yellowChesterfield: couch5,
  white2Seater: couch6,
  beigeChannelSuite: couch7,
  royalBlue3Seater: couch8,
  blackLShape: couch9,
  oliveSofa: couch10,
  charcoalChesterfield: couch11,
  greenChesterfieldRoom: couch12,
};

export const beds = {
  greyWingbackInstalled: bed1,
  greyWingbackAngle: bed2,
};

export const headboards = {
  greyFanShell: headboard1,
  tealTufted: headboard2,
  whiteMirrorPanels: headboard3,
  darkNavyAngular: headboard4,
  greyFanShell2: headboard5,
  greyAngularWorkshop: headboard6,
};

export const pedestals = {
  whitePair: pedestal1,
  dressingTableSet: pedestal2,
  goldFramePair: pedestal3,
  tealPair: pedestal4,
  mirroredChest: pedestal5,
  whiteMinimalist: pedestal6,
};

export const tvStands = {
  floatingWallUnit: tvstand1,
};

// ── Bulk glob import of ALL images (for Gallery) — covers every subdirectory ──
const _jpg  = import.meta.glob<string>('../assets/images/**/*.jpg',  { eager: true, query: '?url', import: 'default' });
const _jpeg = import.meta.glob<string>('../assets/images/**/*.jpeg', { eager: true, query: '?url', import: 'default' });
const _JPG  = import.meta.glob<string>('../assets/images/**/*.JPG',  { eager: true, query: '?url', import: 'default' });
const _png  = import.meta.glob<string>('../assets/images/**/*.png',  { eager: true, query: '?url', import: 'default' });
const _PNG  = import.meta.glob<string>('../assets/images/**/*.PNG',  { eager: true, query: '?url', import: 'default' });

const _all: Record<string, string> = { ..._jpg, ..._jpeg, ..._JPG, ..._png, ..._PNG };

/** Infer category from the subdirectory the image lives in */
export function inferCategory(path: string): string {
  if (path.includes('/coaches/'))      return 'Couches';
  if (path.includes('/chairs/'))       return 'Couches';
  if (path.includes('/beds/'))         return 'Beds';
  if (path.includes('/headboards/'))   return 'Headboards';
  if (path.includes('/tables/'))       return 'Tables';
  if (path.includes('/TV stands'))     return 'TV Stands';
  if (path.includes('/Kitchen Unit'))  return 'Kitchen Units';
  return 'Portfolio';
}

/** Every image in /assets/images and its subdirectories (duplicates filtered out) */
export const allImages = Object.entries(_all)
  .filter(([path]) => !/ 2\./.test(path))           // remove " 2." duplicates
  .sort(([a], [b]) => a.localeCompare(b))            // stable alphabetical order
  .map(([path, src]) => ({
    src,
    filename: path.split('/').pop() ?? '',
    category: inferCategory(path),
  }));
