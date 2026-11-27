// Run from the portfolio checkout so Pango can load the original Instrument Serif TTF.
import { access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const path = (relative) => fileURLToPath(new URL(relative, import.meta.url));
const width = 1200;
const height = 630;
const fontfile = path('../../tools/brand/hexcave/fonts/InstrumentSerif-Regular.ttf');
await access(fontfile); // Pango silently substitutes a system font when this file is missing.
const wordmark = await sharp({
  text: {
    text: '<span foreground="#F6EFE6">Hexcave</span>',
    font: 'Instrument Serif 144',
    fontfile,
    rgba: true
  }
}).png().toBuffer({ resolveWithObject: true });

await sharp(path('../src/assets/studio/banner-art.png'))
  .resize(width, height, { fit: 'cover', position: 'centre' })
  .composite([{
    input: wordmark.data,
    left: Math.round((width - wordmark.info.width) / 2),
    top: Math.round((height - wordmark.info.height) / 2)
  }])
  .png()
  .toFile(path('../public/og/studio.png'));
