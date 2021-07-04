import { promises as fs } from 'fs';
import path from 'path';

const pageName = 'index';
const _cache = new Map();

export async function readHtmlSource(): Promise<string> {
  if (_cache.has(pageName)) {
    return _cache.get(pageName);
  }

  const fileContent = await fs.readFile(
    path.resolve(__dirname, 'static', 'index.html'),
    'utf8',
  );

  _cache.set(pageName, fileContent);

  return fileContent;
};
