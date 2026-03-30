export async function GET() {
  const url = process.env.TALKS_API_URL;
  if (!url) {
    return new Response(JSON.stringify({ error: 'TALKS_API_URL not configured' }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to fetch talks data' }), {
      status: 502, headers: { 'Content-Type': 'application/json' }
    });
  }
}
