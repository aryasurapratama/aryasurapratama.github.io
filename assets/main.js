const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const header = document.querySelector(".site-header");
const desktopNavigation = window.matchMedia("(min-width: 1025px)");
const english = document.documentElement.lang === "en";
// Preserve links shared before the portfolio was split into separate pages.
const legacyRoutes = english
  ? {
      beranda: "/en/",
      profil: "/en/profile/",
      pendidikan: "/en/education/",
      penelitian: "/en/research/",
      karya: "/en/technology/",
      kontak: "/en/contact/",
    }
  : {
      beranda: "/",
      profil: "/profil/",
      pendidikan: "/pendidikan/",
      penelitian: "/penelitian/",
      karya: "/karya/",
      kontak: "/kontak/",
    };
function redirectLegacySection() {
  if (
    !["/", "/index.html", "/en/", "/en/index.html"].includes(location.pathname)
  )
    return;
  const route = legacyRoutes[location.hash.slice(1)];
  if (route && route !== (english ? "/en/" : "/")) {
    location.replace(route + location.search);
  }
}
window.addEventListener("hashchange", redirectLegacySection);
redirectLegacySection();
const messages = english
  ? {
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
    }
  : {
      openMenu: "Buka navigasi",
      closeMenu: "Tutup navigasi",
    };
let focusedNavigationLink;

function closeMenu({ restoreFocus = false } = {}) {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", messages.openMenu);
  navigation.classList.remove("open");
  if (restoreFocus && !desktopNavigation.matches) menuButton.focus();
}

function openMenu({ lastLink = false } = {}) {
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", messages.closeMenu);
  navigation.classList.add("open");
  navigation.scrollTop = 0;
  const links = navigation.querySelectorAll("a");
  links[lastLink ? links.length - 1 : 0].focus({ preventScroll: !lastLink });
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMenu();
  else openMenu();
});
menuButton.addEventListener("keydown", (event) => {
  if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
  event.preventDefault();
  openMenu({ lastLink: event.key === "ArrowUp" });
});
navigation.addEventListener("keydown", (event) => {
  if (
    desktopNavigation.matches ||
    !["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)
  )
    return;
  const links = [...navigation.querySelectorAll("a")];
  const current = links.indexOf(document.activeElement);
  if (current < 0) return;
  event.preventDefault();
  const next =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? links.length - 1
        : (current + (event.key === "ArrowDown" ? 1 : -1) + links.length) %
          links.length;
  links[next].focus();
});
navigation.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
      return;
    closeMenu();
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

const backTop = document.querySelector(".back-top");
backTop.addEventListener("click", (event) => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  closeMenu();
  const heading = document.querySelector("main h1");
  heading.setAttribute("tabindex", "-1");
  window.scrollTo({ top: 0 });
  heading.focus({ preventScroll: true });
});
backTop.addEventListener("blur", scheduleBackTopUpdate);
let backTopFrame;
function updateBackTop() {
  backTopFrame = null;
  const editing =
    document.activeElement.matches("input, textarea, select") ||
    Boolean(document.activeElement.closest(".brief-panel"));
  backTop.hidden =
    (window.scrollY < 300 || editing) && document.activeElement !== backTop;
}
function scheduleBackTopUpdate() {
  if (backTopFrame == null) backTopFrame = requestAnimationFrame(updateBackTop);
}
window.addEventListener("scroll", scheduleBackTopUpdate, { passive: true });
window.addEventListener("resize", scheduleBackTopUpdate);
window.addEventListener("pageshow", scheduleBackTopUpdate);
window.addEventListener("load", scheduleBackTopUpdate);
document.addEventListener("focusin", scheduleBackTopUpdate);
document.addEventListener("focusout", scheduleBackTopUpdate);
document.fonts?.ready.then(scheduleBackTopUpdate);
scheduleBackTopUpdate();

document.querySelector("#year").textContent = new Intl.DateTimeFormat("en", {
  year: "numeric",
  timeZone: "Asia/Jakarta",
}).format(new Date());
