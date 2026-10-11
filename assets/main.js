const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Buka navigasi");
  navigation.classList.remove("open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Buka navigasi" : "Tutup navigasi",
  );
  navigation.classList.toggle("open", !isOpen);
});

navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 621px)").addEventListener("change", closeMenu);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigation.querySelectorAll("a").forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -65% 0px" },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => sectionObserver.observe(section));
}

document.querySelector("#year").textContent = new Intl.DateTimeFormat("en", {
  year: "numeric",
  timeZone: "Asia/Jakarta",
}).format(new Date());

let toastTimer;
function showToast(message) {
  const toast = document.querySelector("#toast");
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 4000);
}

document.querySelector("#copy-profile").addEventListener("click", async () => {
  const profileUrl = "https://github.com/aryasurapratama";
  try {
    if (!navigator.clipboard?.writeText)
      throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(profileUrl);
    showToast("Tautan profil GitHub berhasil disalin.");
  } catch {
    showToast(`Tautan profil: ${profileUrl}`);
  }
});

const projects = {
  conference: {
    title: "ISambuddha 2023",
    category: "WEBSITE KONFERENSI / 2023",
    description:
      "Website untuk The 1st International Conference & Symposium on Applied Buddhism and Buddhayana Spirit Movement (ISambuddha) 2023. Repositori ini menggabungkan halaman informasi acara dan kebutuhan peserta konferensi.",
    features: [
      "Informasi konferensi, pembicara, dan komite.",
      "Panduan penulis serta halaman submission peserta.",
      "Dokumen acara dan template yang dapat diunduh.",
    ],
    tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap"],
    url: "https://github.com/aryasurapratama/IsamBuddha-2023",
  },
  automation: {
    title: "WA Autokick",
    category: "SOFTWARE & AUTOMATION / 2026",
    description:
      "Bot berbasis Node.js untuk membantu pengelolaan anggota grup WhatsApp. Proyek ini mengeksplorasi otomasi pemantauan aktivitas anggota dan pekerjaan administrasi grup.",
    features: [
      "Pencatatan aktivitas anggota dan pemeriksaan terjadwal.",
      "Peringatan serta penanganan anggota yang tidak aktif.",
      "Whitelist anggota dan pemeriksaan izin admin bot.",
    ],
    tags: ["Node.js", "JavaScript", "Baileys", "Cron"],
    url: "https://github.com/aryasurapratama/wa-autokick",
  },
};

const dialog = document.querySelector("#project-dialog");
let dialogTrigger;
document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    dialogTrigger = button;
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-category").textContent = project.category;
    document.querySelector("#dialog-description").textContent =
      project.description;
    document.querySelector("#dialog-link").href = project.url;
    const features = project.features.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    });
    const tags = project.tags.map((text) => {
      const tag = document.createElement("span");
      tag.textContent = text;
      return tag;
    });
    document.querySelector("#dialog-features").replaceChildren(...features);
    document.querySelector("#dialog-tags").replaceChildren(...tags);
    dialog.showModal();
    document.body.style.overflow = "hidden";
  });
});
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.style.overflow = "";
  dialogTrigger?.focus();
});
