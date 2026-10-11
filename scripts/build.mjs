import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { generateSite } from "./generate.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
await generateSite();
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of [
  "index.html",
  "404.html",
  "profil",
  "pendidikan",
  "penelitian",
  "karya",
  "kontak",
  "en",
  "assets",
  "robots.txt",
  "sitemap.xml",
  ".nojekyll",
]) {
  await cp(path.join(root, entry), path.join(output, entry), {
    recursive: true,
  });
}
console.log("Portofolio siap dipublikasikan: dist/");
