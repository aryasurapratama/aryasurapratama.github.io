const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const header = document.querySelector(".site-header");
const desktopNavigation = window.matchMedia("(min-width: 1025px)");
let focusedNavigationLink;

function closeMenu({ restoreFocus = false } = {}) {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Buka navigasi");
  navigation.classList.remove("open");
  if (restoreFocus && !desktopNavigation.matches) menuButton.focus();
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
navigation.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
      return;
    const target = document.querySelector(link.getAttribute("href"));
    closeMenu();
    const heading = target?.querySelector("h2") || target;
    if (!heading) return;
    heading.setAttribute("tabindex", "-1");
    requestAnimationFrame(() => heading.focus({ preventScroll: true }));
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    closeMenu({ restoreFocus: true });
  }
});
document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) closeMenu();
});
document.addEventListener("focusin", (event) => {
  focusedNavigationLink = navigation.contains(event.target)
    ? event.target
    : null;
  if (!header.contains(event.target)) closeMenu();
});
desktopNavigation.addEventListener("change", () => {
  closeMenu({
    restoreFocus:
      Boolean(focusedNavigationLink) ||
      navigation.contains(document.activeElement),
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navigationLinks = [...navigation.querySelectorAll("a")];
let navigationFrame;
function updateActiveSection() {
  navigationFrame = null;
  const marker = header.getBoundingClientRect().height + 32;
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top > marker) break;
    activeSection = section;
  }
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 2
  )
    activeSection = sections.at(-1);
  navigationLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${activeSection?.id}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
function scheduleNavigationUpdate() {
  if (navigationFrame == null)
    navigationFrame = requestAnimationFrame(updateActiveSection);
}
window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
window.addEventListener("resize", scheduleNavigationUpdate);
window.addEventListener("hashchange", scheduleNavigationUpdate);
window.addEventListener("pageshow", scheduleNavigationUpdate);
window.addEventListener("load", scheduleNavigationUpdate);
document.fonts?.ready.then(scheduleNavigationUpdate);
scheduleNavigationUpdate();

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
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 4500);
}

document.querySelector("#copy-phone").addEventListener("click", async () => {
  try {
    if (!navigator.clipboard?.writeText)
      throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText("082232623434");
    showToast("Nomor WhatsApp berhasil disalin.");
  } catch {
    showToast("Nomor WhatsApp: 0822 3262 3434");
  }
});
