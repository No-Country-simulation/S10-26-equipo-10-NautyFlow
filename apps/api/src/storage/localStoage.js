import path from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';

const UPLOADS_DIR = 'uploads'; 

export async function saveFile(key, buffer) {
    const fullPath = path.join(UPLOADS_DIR, key);
    await mkdir(path.dirname(fullPath), { recursive: true });
    await writeFile(fullPath, buffer);
};