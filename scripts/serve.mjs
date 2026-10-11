import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("../", import.meta.url)));
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
const server = http.createServer(async (request, response) => {
  try {
    const requested = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let file = path.resolve(
      root,
      `.${requested === "/" ? "/index.html" : requested}`,
    );
    if (
      !file.startsWith(`${root}${path.sep}`) ||
      requested.split("/").some((part) => part.startsWith("."))
    ) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    let info = await stat(file);
    if (info.isDirectory()) {
      if (!requested.endsWith("/")) {
        const location = new URL(request.url, "http://localhost");
        location.pathname += "/";
        response
          .writeHead(301, { Location: location.pathname + location.search })
          .end();
        return;
      }
      file = path.join(file, "index.html");
      info = await stat(file);
    }
    if (!info.isFile()) throw new Error("Not a file");
    response.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    const content = await readFile(file);
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    const english = new URL(
      request.url,
      "http://localhost",
    ).pathname.startsWith("/en/");
    response.end(
      await readFile(path.join(root, english ? "en/404.html" : "404.html")),
    );
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Local: http://127.0.0.1:${port}`),
);
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
