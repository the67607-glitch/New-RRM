import type { VercelRequest, VercelResponse } from "@vercel/node";

const STREAMPAY_BASE = "https://stream-app-service.streampay.sa/api";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Extract the path after /streampay-api/
  const path = (req.query.path as string[])?.join("/") || "";
  const targetUrl = `${STREAMPAY_BASE}/${path}`;

  const apiKey = process.env.VITE_STREAM_X_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "VITE_STREAM_X_API_KEY not configured" });
  }

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "Origin": "https://stream-app-service.streampay.sa",
      },
      body: req.method !== "GET" && req.method !== "HEAD" ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.text();

    // Forward status and content-type
    res.status(response.status);
    res.setHeader("Content-Type", response.headers.get("Content-Type") || "application/json");
    return res.send(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(502).json({ error: "Proxy error", details: message });
  }
}
