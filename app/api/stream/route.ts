import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url")

  if (!url) {
    return new Response("Missing url", { status: 400 })
  }

  try {
    const res = await fetch(url, {
      headers: {
        // spoof biar server pemerintah ga rewel
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Referer: "https://www.google.com/",
      },
    })

    if (!res.ok) {
      return new Response("Upstream error", { status: res.status })
    }

    return new Response(res.body, {
      status: 200,
      headers: {
        "Content-Type":
          res.headers.get("content-type") ||
          "application/vnd.apple.mpegurl",
        "Cache-Control": "no-cache",
      },
    })
  } catch (err) {
    return new Response("Proxy error", { status: 500 })
  }
}
