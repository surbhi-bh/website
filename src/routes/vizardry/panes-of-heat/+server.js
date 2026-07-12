import html from '../../../../static/vizardry/panes-of-heat/index.html?raw';

const patched = html.replace('<head>', '<head>\n<base href="/vizardry/panes-of-heat/">');

export function GET() {
  return new Response(patched, {
    headers: { 'content-type': 'text/html; charset=utf-8' }
  });
}
