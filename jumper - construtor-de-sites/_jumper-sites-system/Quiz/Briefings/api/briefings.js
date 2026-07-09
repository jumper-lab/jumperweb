import { createNotionBriefingPage } from "../notion-client.mjs";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "method_not_allowed" });
    return;
  }

  try {
    const payload = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
    const notion = await createNotionBriefingPage(payload || {});

    response.status(201).json({
      ok: true,
      ...notion,
    });
  } catch (error) {
    response.status(error.status || 500).json({
      error: error.code || "notion_error",
      message: error.message,
      details: error.details,
    });
  }
}
