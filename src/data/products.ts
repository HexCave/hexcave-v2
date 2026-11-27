import type { ImageMetadata } from 'astro';
import games from './prism-games.json';
import comeThroughIcon from '../assets/products/come-through/icon.svg?url';

const images = import.meta.glob<ImageMetadata>('../assets/products/*/*.png', {
  eager: true, import: 'default',
});

export interface Shot {
  src: ImageMetadata;
  file: string;
  label: string;
  alt: string;
}

function image(slug: string, file: string) {
  const src = images[`../assets/products/${slug}/${file}`];
  if (!src) throw new Error(`Missing product artwork: ${slug}/${file}`);
  return src;
}

function shot(slug: string, file: string, label: string, alt: string): Shot {
  return { src: image(slug, file), file, label, alt };
}

function policies(slug: string) {
  const root = 'https://theonlyengineer.com/projects/' + slug + '/';
  return [
    { name: 'Privacy policy', href: root + 'privacy/' },
    { name: 'Terms', href: root + 'terms/' },
    { name: 'Delete an account', href: root + 'delete-account/' },
  ];
}

export const principleTitles = {
  account: 'No account needed',
  offline: 'Works offline',
  pauses: 'Full-screen ads at natural pauses',
  original: 'Original work',
};

export interface Product {
  slug: string;
  name: string;
  storeName?: string;
  oneLine: string;
  status: 'live' | 'in-development';
  platform: 'android' | 'web';
  link?: string;
  about: string;
  facts: [string, string][];
  principles: Partial<Record<keyof typeof principleTitles, string>>;
  legal?: ReturnType<typeof policies>;
  icon?: { src: string | ImageMetadata; file: string };
  screenshots: Shot[];
  homeShots: number[];
  ogImage?: string;
  featureFile?: string;
  games?: boolean;
  sources: string[];
}

export const products: Product[] = [
  {
    slug: 'hushcoil', name: 'Hushcoil', storeName: 'Hushcoil: Snake Puzzle',
    oneLine: 'A logic puzzle about coiled snakes. Find the one with a clear path out.',
    status: 'live', platform: 'android',
    link: 'https://play.google.com/store/apps/details?id=com.theonlyengineer.hushcoil',
    about: 'Look for a head pointing into open space. Tap that snake and it slides off the board, leaving room for the next one. At a crossing, the snake underneath has to wait. If you send a snake into another, it bites.',
    facts: [
      ['Boards', 'We built 300 levels in 15 chapters. After the last chapter, your phone generates encore levels.'],
      ['The daily coil', 'One extra board each day, matched to your progress.'],
      ['Lives', 'Three dead snakes end a level. Spend a life to revive one where it lies.'],
    ],
    principles: {
      account: 'Your progress stays on your phone. You can start a board without signing up.',
      offline: 'The levels, the daily coil and your saved hints work without a connection.',
      pauses: 'Full-screen ads can appear at the end of a level. Videos for hints and revives are optional.',
      original: 'We make the levels with our own generator. The name, art and sounds are ours too.',
    },
    legal: policies('hushcoil'),
    icon: { src: image('hushcoil', 'icon-512.png'), file: 'icon-512.png' },
    screenshots: [
      shot('hushcoil', '01-slither.png', 'Slither', 'Coloured snakes coil around one another on a sand-coloured Hushcoil board.'),
      shot('hushcoil', '02-bite.png', 'The bite', 'A close view of two snakes meeting head to body, with a red bite mark between them.'),
      shot('hushcoil', '03-grow.png', 'Larger boards', 'A blue board with long snakes winding around gaps in the playing surface.'),
      shot('hushcoil', '04-hint.png', 'A hint', 'One snake stands out on the board while a hint fades the others.'),
      shot('hushcoil', '05-daily.png', 'Daily coil', 'The Hushcoil start screen with the daily coil below the chapter progress.'),
      shot('hushcoil', '06-night.png', 'Night board', 'Bright snakes on dark ground in the night version of a Hushcoil board.'),
    ],
    homeShots: [0, 2, 5], ogImage: 'og/hushcoil.png', featureFile: 'feature-graphic.png',
    sources: ['../hushcoil/README.md', '../hushcoil/release/listing.md'],
  },
  {
    slug: 'ludo', name: 'Ludo', storeName: 'Ludo Jaldi: Play with Friends',
    oneLine: 'Pass one phone around the table, or share a room code and play from separate phones.',
    status: 'live', platform: 'android',
    link: 'https://play.google.com/store/apps/details?id=com.theonlyengineer.ludo',
    about: 'Roll a six to take a token out of base. Land on a rival and send their token back. In Classic, the aim is to bring all four of yours home. For a shorter game, choose Quick. One capture and one token home wins it.',
    facts: [
      ['Seats', 'Two to four. Friends and computer players can share a board.'],
      ['Teams', 'Red and yellow play green and blue. Landing on a partner leaves their token in play.'],
      ['Online rooms', 'Give friends a six-character code or join an open table through Quick match.'],
    ],
    principles: {
      account: 'Pass the phone without signing in. Online, you can take a seat as a guest.',
      offline: 'A shared-phone game needs no network connection.',
      pauses: 'Ludo has a banner during play. Its full-screen ad comes when a game ends.',
    },
    legal: policies('ludo'),
    icon: { src: image('ludo', 'icon-512.png'), file: 'icon-512.png' },
    screenshots: [
      shot('ludo', '1-game.png', 'The board', 'Red is up to roll on a four-colour Ludo board, with the die below the board.'),
      shot('ludo', '2-choose-token.png', 'Choosing a token', 'Red tokens are circled on the board for the player to choose a move.'),
      shot('ludo', '3-seats.png', 'Choosing seats', 'The seat selection screen with four player colours and the Classic, Quick and Team up rules.'),
      shot('ludo', '4-home.png', 'Start screen', 'The Ludo Jaldi start screen offers friends, computer and online play.'),
      shot('ludo', '5-online.png', 'Online rooms', 'Quick match, Create a room and Join a room on the online play screen.'),
      shot('ludo', '6-how-to-play.png', 'Rules', 'The rules screen explains taking tokens out of base, moving and capturing.'),
    ],
    homeShots: [0, 2], ogImage: 'og/ludo.png', featureFile: 'feature-graphic-1024x500.png',
    sources: ['../ludo/README.md', '../ludo/docs/listing/store-listing.md'],
  },
  {
    slug: 'prism', name: 'Prism Games', status: 'live', platform: 'web',
    oneLine: 'Play a game of chess, untangle a board of arrows or race down a six-sided tunnel.',
    link: 'prism/#games', games: true,
    about: 'In Arrowlock, you work out which arrow has room to leave. Hex Drift puts you inside a six-sided tunnel. Pick a game below to open it in its own tab.',
    facts: [
      ['Catalogue', games.length + ' games. Each has its own play link.'],
      ['Format', 'Two-dimensional boards and three-dimensional games.'],
      ['At the chessboard', 'Take on a computer opponent that looks several moves ahead.'],
    ],
    principles: {},
    screenshots: [
      shot('prism', 'arrowlock.png', 'Arrowlock', 'Arrowlock board with a path of orange, blue and purple arrows.'),
      shot('prism', 'hex-drift.png', 'Hex Drift', 'The Hex Drift title and Begin button inside a six-sided tunnel.'),
      shot('prism', 'lumen.png', 'Lumen', 'A beam of white light crosses the grid under a circular target in Lumen.'),
      shot('prism', 'chess.png', 'Chess', 'A chessboard at the opening position, with white pieces closest to the player.'),
    ],
    homeShots: [0, 3], sources: ['../prism/README.md', '../prism/prism-games/index.json'],
  },
  {
    slug: 'come-through', name: 'Come Through', status: 'in-development', platform: 'android',
    oneLine: 'An ADHD companion for the times you silence your phone to concentrate.',
    about: 'Silencing your phone can quiet the reminder you meant to act on. We’re building Come Through for that moment between noticing a reminder and getting up to do something about it.',
    facts: [
      ['Platform', 'Android.'],
      ['In the app', 'We’ve built the reminder delivery engine and tested it on a phone.'],
      ['Still ahead', 'The companion features are in development.'],
    ],
    principles: {}, icon: { src: comeThroughIcon, file: 'icon.svg' },
    screenshots: [], homeShots: [], sources: ['../come-through/README.md (introduction and “Why this exists”)'],
  },
];

for (const product of products) {
  if (product.status === 'live' && !product.link?.trim()) {
    throw new Error(`Live product ${product.slug} needs a destination.`);
  }
  if (product.screenshots.some((s) => !s.alt.trim())) {
    throw new Error(`Every ${product.slug} screenshot needs alt text.`);
  }
}

export function statusLabel(product: Product) {
  if (product.status === 'in-development') return 'In development';
  return product.platform === 'web' ? 'In your browser' : 'On Google Play';
}
