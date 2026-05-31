import fs from 'node:fs';
import path from 'node:path';

const CHART_DIR = 'static/images/30daychartchallenge-2026';
const URL_BASE = '/images/30daychartchallenge-2026';
const FILE_RE = /^day(\d+)(?:[-_].*)?\.(png|jpg|jpeg|webp|gif|svg|mp4|webm|mov)$/i;
const VIDEO_EXTS = new Set(['mp4', 'webm', 'mov']);

export const prerender = true;

export function load() {
  const dayMedia = {};
  // Build set of available thumbnails (basename without ext) for quick lookup.
  const thumbsByBase = new Map();
  try {
    for (const file of fs.readdirSync(path.resolve(CHART_DIR, 'thumbs'))) {
      const m = file.match(/^(day\d+(?:[-_].*)?)\.(jpg|jpeg|png|webp)$/i);
      if (m) thumbsByBase.set(m[1].toLowerCase(), file);
    }
  } catch {
    // thumbs dir missing — full-res will be used directly
  }

  try {
    for (const file of fs.readdirSync(path.resolve(CHART_DIR))) {
      const match = file.match(FILE_RE);
      if (!match) continue;
      const day = Number(match[1]);
      const ext = match[2].toLowerCase();
      const isVideo = VIDEO_EXTS.has(ext);
      const existing = dayMedia[day];
      if (!existing || (existing.kind === 'video' && !isVideo)) {
        const base = file.slice(0, file.length - ext.length - 1).toLowerCase();
        const thumbFile = thumbsByBase.get(base);
        dayMedia[day] = {
          kind: isVideo ? 'video' : 'image',
          src: `${URL_BASE}/${file}`,
          thumb: thumbFile ? `${URL_BASE}/thumbs/${thumbFile}` : `${URL_BASE}/${file}`
        };
      }
    }
  } catch {
    // directory missing — return empty map
  }
  return { dayMedia };
}
