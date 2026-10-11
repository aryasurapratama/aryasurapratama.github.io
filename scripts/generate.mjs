import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const origin = "https://aryasurapratama.github.io";
const name = "Arya Sura Pratama, M.Kom.";

export const pages = [
  {
    key: "home",
    id: {
      path: "/",
      label: "Beranda",
      title: `${name} | Dosen & Technology Lead`,
      description:
        "Arya Sura Pratama, M.Kom. — dosen tetap Jinarakkhita Buddhist College of Lampung dan Founder & Technology Lead SoftKlinik.",
    },
    en: {
      path: "/en/",
      label: "Home",
      title: `${name} | Lecturer & Technology Lead`,
      description:
        "Arya Sura Pratama, M.Kom. — permanent lecturer at Jinarakkhita Buddhist College of Lampung and Founder & Technology Lead of SoftKlinik.",
    },
  },
  {
    key: "profile",
    id: {
      path: "/profil/",
      label: "Profil",
      title: `Profil Akademik | ${name}`,
      description:
        "Profil akademik Arya Sura Pratama, M.Kom., dosen tetap pada Program Studi Pendidikan Keagamaan Buddha, Jinarakkhita Buddhist College of Lampung.",
    },
    en: {
      path: "/en/profile/",
      label: "Profile",
      title: `Academic Profile | ${name}`,
      description:
        "Academic profile of Arya Sura Pratama, M.Kom., a permanent lecturer in the Buddhist Religious Education Study Program at Jinarakkhita Buddhist College of Lampung.",
    },
  },
  {
    key: "education",
    id: {
      path: "/pendidikan/",
      label: "Pendidikan",
      title: `Pendidikan | ${name}`,
      description:
        "Pendidikan Ilmu Komputer Arya Sura Pratama, M.Kom.: S1 Universitas Teknologi Yogyakarta (2022) dan S2 Institut Informatika dan Bisnis Darmajaya (2025).",
    },
    en: {
      path: "/en/education/",
      label: "Education",
      title: `Education | ${name}`,
      description:
        "Computer Science education of Arya Sura Pratama, M.Kom.: bachelor's degree at Universitas Teknologi Yogyakarta (2022) and master's degree at Darmajaya (2025).",
    },
  },
  {
    key: "research",
    id: {
      path: "/penelitian/",
      label: "Penelitian",
      title: `Penelitian & Publikasi | ${name}`,
      description:
        "Publikasi pilihan Arya Sura Pratama, M.Kom. tentang literasi digital, AI, mindfulness, dan teknologi pendidikan, dengan tautan ke sumber penerbit.",
    },
    en: {
      path: "/en/research/",
      label: "Research",
      title: `Research & Publications | ${name}`,
      description:
        "Selected publications by Arya Sura Pratama, M.Kom. on digital literacy, AI, mindfulness, and educational technology, with links to publisher sources.",
    },
  },
  {
    key: "technology",
    id: {
      path: "/karya/",
      label: "Karya",
      title: `Karya & Pengembangan | ${name}`,
      description:
        "Pengembangan website, aplikasi, dan sistem digital melalui SoftKlinik. Arya Sura Pratama, M.Kom., Founder & Technology Lead.",
    },
    en: {
      path: "/en/technology/",
      label: "Technology",
      title: `Technology & Development | ${name}`,
      description:
        "Website, application, and digital system development through SoftKlinik, led by Arya Sura Pratama, M.Kom., Founder & Technology Lead.",
    },
  },
  {
    key: "contact",
    id: {
      path: "/kontak/",
      label: "Hubungi saya",
      title: `Kontak | ${name}`,
      description:
        "Hubungi Arya Sura Pratama, M.Kom. untuk diskusi akademik, kolaborasi penelitian, serta pengembangan web dan perangkat lunak.",
    },
    en: {
      path: "/en/contact/",
      label: "Contact me",
      title: `Contact | ${name}`,
      description:
        "Contact Arya Sura Pratama, M.Kom. for academic discussions, research collaboration, and web and software development.",
    },
  },
];

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
}

export async function generateSite() {
  const layout = await readFile(path.join(root, "src/layout.html"), "utf8");
  for (const lang of ["id", "en"]) {
    const english = lang === "en";
    const alternateLang = english ? "id" : "en";
    for (const page of pages) {
      const current = page[lang];
      const alternate = page[alternateLang];
      const content = await readFile(
        path.join(root, "src/content", lang, `${page.key}.html`),
        "utf8",
      );
      if (
        (content.match(/<h1\b/g) || []).length !== 1 ||
        (content.match(/<section\b/g) || []).length !== 1
      ) {
        throw new Error(
          `${lang}/${page.key}: expected one page heading and one content section`,
        );
      }
      const navigation = pages
        .map((item) => {
          const classes = [
            item.key === "contact" ? "nav-contact" : "",
            item.key === page.key ? "active" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const attributes = `${classes ? ` class="${classes}"` : ""}${item.key === page.key ? ' aria-current="page"' : ""}`;
          const arrow =
            item.key === "contact"
              ? '<svg class="icon" aria-hidden="true"><use href="/assets/icons/ui.svg#icon-arrow" /></svg>'
              : "";
          return `<a href="${item[lang].path}"${attributes}>${escapeHtml(item[lang].label)}${arrow}</a>`;
        })
        .join("\n");
      const person = {
        "@type": "Person",
        "@id": `${origin}/#person`,
        name: "Arya Sura Pratama",
        honorificSuffix: "M.Kom.",
        url: `${origin}${pages[0][lang].path}`,
        image: `${origin}/assets/profile.jpg?v=3`,
        jobTitle: [
          english ? "Permanent lecturer" : "Dosen tetap",
          "Founder & Technology Lead",
        ],
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "Jinarakkhita Buddhist College of Lampung",
          department: {
            "@type": "Organization",
            name: english
              ? "Buddhist Religious Education Study Program"
              : "Program Studi Pendidikan Keagamaan Buddha",
          },
        },
        worksFor: {
          "@type": "Organization",
          name: "SoftKlinik",
          url: "https://softklinik.my.id/",
        },
        alumniOf: [
          "Universitas Teknologi Yogyakarta",
          "Institut Informatika dan Bisnis Darmajaya",
        ].map((institution) => ({
          "@type": "CollegeOrUniversity",
          name: institution,
        })),
        knowsAbout: english
          ? ["Computer Science", "Web development", "Software development"]
          : [
              "Ilmu Komputer",
              "Pengembangan web",
              "Pengembangan perangkat lunak",
            ],
        sameAs: [
          `https://scholar.google.com/citations?user=KmvcpXoAAAAJ&hl=${lang}`,
          "https://sinta.kemdiktisaintek.go.id/authors/profile/6854537",
          "https://orcid.org/0009-0006-5780-671X",
          "https://github.com/aryasurapratama",
          "https://www.instagram.com/aryasurapratama/",
        ],
      };
      const values = {
        lang,
        locale: english ? "en_US" : "id_ID",
        alternateLocale: english ? "id_ID" : "en_US",
        title: escapeHtml(current.title),
        description: escapeHtml(current.description),
        canonical: origin + current.path,
        indonesianUrl: origin + page.id.path,
        englishUrl: origin + page.en.path,
        imagePreload:
          page.key === "home"
            ? '<link rel="preload" href="/assets/profile.jpg?v=3" as="image" />'
            : "",
        structuredData: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@graph": [
              person,
              {
                "@type": "WebPage",
                "@id": origin + current.path,
                url: origin + current.path,
                name: current.title,
                description: current.description,
                inLanguage: lang,
                mainEntity: { "@id": `${origin}/#person` },
              },
            ],
          },
          null,
          2,
        ).replace(/</g, "\\u003c"),
        pageKey: page.key,
        pageLabel:
          page.key === "contact"
            ? english
              ? "Contact"
              : "Kontak"
            : current.label,
        skipLabel: english ? "Skip to content" : "Langsung ke konten",
        navigationLabel: english ? "Main navigation" : "Navigasi utama",
        navigation,
        alternatePath: alternate.path,
        alternateLang,
        alternateLangLabel: alternateLang.toUpperCase(),
        flag: english ? "id" : "gb",
        languageLabel: english
          ? "Beralih ke Bahasa Indonesia"
          : "Switch to English",
        openMenuLabel: english ? "Open navigation" : "Buka navigasi",
        backTopLabel: english ? "Back to top" : "Kembali ke atas",
        content,
      };
      const html = layout
        .replace(
          /^([ \t]*)<!-- (content|navigation) -->$/gm,
          (_, indent, key) =>
            values[key]
              .trim()
              .split("\n")
              .map((line) => indent + line)
              .join("\n"),
        )
        .replace(/^([ \t]*)\{\{structuredData\}\}$/gm, (_, indent) =>
          values.structuredData
            .split("\n")
            .map((line) => indent + line)
            .join("\n"),
        )
        .replace(/\{\{(\w+)\}\}/g, (_, key) => {
          if (!(key in values)) throw new Error(`Unknown layout field: ${key}`);
          return values[key];
        })
        .replace(/^[ \t]+$/gm, "");
      const directory = path.join(root, current.path);
      await mkdir(directory, { recursive: true });
      await writeFile(path.join(directory, "index.html"), html);
    }
  }
  const entries = pages
    .flatMap((page) =>
      ["id", "en"].map(
        (lang) => `  <url>
    <loc>${origin}${page[lang].path}</loc>
    <xhtml:link rel="alternate" hreflang="id" href="${origin}${page.id.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${origin}${page.en.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${page.id.path}" />
  </url>`,
      ),
    )
    .join("\n");
  await writeFile(
    path.join(root, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`,
  );
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  await generateSite();
  console.log("Generated 12 portfolio pages and sitemap.");
}
