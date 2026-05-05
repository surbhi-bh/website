import fs from 'node:fs';
import path from 'node:path';

const CHART_DIR = 'static/images/30daychartchallenge-2026';
const URL_BASE = '/images/30daychartchallenge-2026';
const FILE_RE = /^day(\d+)(?:[-_].*)?\.(png|jpg|jpeg|webp|gif|svg|mp4|webm|mov)$/i;
const VIDEO_EXTS = new Set(['mp4', 'webm', 'mov']);

export const prerender = true;

export function load() {
  const dayMedia = {};
  try {
    for (const file of fs.readdirSync(path.resolve(CHART_DIR))) {
      const match = file.match(FILE_RE);
      if (!match) continue;
      const day = Number(match[1]);
      const ext = match[2].toLowerCase();
      // Prefer the first match per day; if a still image exists later, prefer it over a video.
      const isVideo = VIDEO_EXTS.has(ext);
      const existing = dayMedia[day];
      if (!existing || (existing.kind === 'video' && !isVideo)) {
        dayMedia[day] = {
          kind: isVideo ? 'video' : 'image',
          src: `${URL_BASE}/${file}`
        };
      }
    }
  } catch {
    // directory missing — return empty map
  }
  return { dayMedia };
}
