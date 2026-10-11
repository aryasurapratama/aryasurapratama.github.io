const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const header = document.querySelector(".site-header");
const desktopNavigation = window.matchMedia("(min-width: 1025px)");
const english = document.documentElement.lang === "en";
const messages = english
  ? {
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      copied: "WhatsApp number copied.",
      phone: "WhatsApp number: 0822 3262 3434",
    }
  : {
      openMenu: "Buka navigasi",
      closeMenu: "Tutup navigasi",
      copied: "Nomor WhatsApp berhasil disalin.",
      phone: "Nomor WhatsApp: 0822 3262 3434",
    };
let focusedNavigationLink;

function closeMenu({ restoreFocus = false } = {}) {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", messages.openMenu);
  navigation.classList.remove("open");
  if (restoreFocus && !desktopNavigation.matches) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? messages.openMenu : messages.closeMenu,
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
// Keep the current section when moving between the two static language pages.
const languageSwitch = document.querySelector(".language-switch");
function updateLanguageDestination() {
  const destination = new URL(
    languageSwitch.getAttribute("href"),
    location.href,
  );
  destination.hash = location.hash;
  languageSwitch.setAttribute("href", destination.pathname + destination.hash);
}
window.addEventListener("hashchange", updateLanguageDestination);
updateLanguageDestination();
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
    showToast(messages.copied);
  } catch {
    showToast(messages.phone);
  }
});
