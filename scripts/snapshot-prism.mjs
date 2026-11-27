// Run after Prism publishes. The site build only reads the resulting local snapshot.
import { access, mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';

const source = new URL('../../prism/prism-games/', import.meta.url);
const covers = new URL('../src/assets/products/prism/covers/', import.meta.url);
const data = new URL('../src/data/', import.meta.url);
const { games } = JSON.parse(await readFile(new URL('index.json', source), 'utf8'));

if (!Array.isArray(games) || !games.length) throw new Error('The Prism catalogue is empty.');

const snapshot = [];
const artwork = new Map();
for (const { id, title, tagline, latest: version, versions, cover } of games) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || artwork.has(id)) {
    throw new Error(`Unexpected or duplicate game ID: ${id}`);
  }
  const release = versions.find((item) => item.version === version);
  const path = `games/${id}/${version}`;
  if (!title?.trim() || !tagline?.trim() || !release || release.path !== path ||
      release.entry !== 'index.html' || cover !== `games/${id}/cover.svg`) {
    throw new Error(`Check the catalogue entry for ${id} before refreshing the snapshot.`);
  }
  await access(new URL(`${path}/index.html`, source));
  artwork.set(id, await readFile(new URL(cover, source)));
  snapshot.push({ id, title, tagline, version, url: `https://hexcave.github.io/prism-games/${path}/` });
}

await mkdir(covers, { recursive: true });
await mkdir(data, { recursive: true });
for (const [id, svg] of artwork) await writeFile(new URL(`${id}.svg`, covers), svg);
await writeFile(new URL('prism-games.json', data), JSON.stringify(snapshot, null, 2) + '\n');
for (const name of await readdir(covers)) {
  if (name.endsWith('.svg') && !artwork.has(name.slice(0, -4))) await unlink(new URL(name, covers));
}
console.log(`Snapshotted ${snapshot.length} games and covers.`);
