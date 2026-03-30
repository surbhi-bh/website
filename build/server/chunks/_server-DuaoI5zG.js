async function GET() {
  const url = process.env.STEPS_API_URL;
  if (!url) {
    return new Response(JSON.stringify({ error: "STEPS_API_URL not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Failed to fetch steps data" }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export { GET };
//# sourceMappingURL=_server-DuaoI5zG.js.map
