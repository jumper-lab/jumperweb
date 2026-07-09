import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { createNotionBriefingPage } from "./notion-client.mjs";

const PORT = Number(process.env.PORT || 4177);
const ROOT = fileURLToPath(new URL(".", import.meta.url));

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/api/briefings") {
      await handleBriefingSubmit(request, response);
      return;
    }

    if (request.method !== "GET") {
      sendJson(response, 405, { error: "method_not_allowed" });
      return;
    }

    await serveStatic(request, response);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: "server_error", message: error.message });
  }
}).listen(PORT, () => {
  console.log(`Briefing quiz rodando em http://localhost:${PORT}/`);
});

async function handleBriefingSubmit(request, response) {
  const payload = await readJsonBody(request);

  try {
    const data = await createNotionBriefingPage(payload);
    sendJson(response, 201, { ok: true, ...data });
  } catch (error) {
    sendJson(response, error.status || 500, {
      error: error.code || "notion_error",
      message: error.message,
      details: error.details,
      payload: error.code === "notion_not_configured" ? payload : undefined,
    });
  }
}

async function serveStatic(request, response) {
  const url = new URL(request.url || "/", `http://localhost:${PORT}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(ROOT, safePath);

  if (!filePath.startsWith(ROOT)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  const body = await readFile(filePath);
  response.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream" });
  response.end(body);
}

async function readJsonBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function sendJson(response, status, body) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}
