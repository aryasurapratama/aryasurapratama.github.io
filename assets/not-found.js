// GitHub Pages serves the root 404 document for missing URLs in either language.
if (location.pathname.startsWith("/en/")) {
  document.documentElement.lang = "en";
  document.title = "Page not found | Arya Sura Pratama, M.Kom.";
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.textContent = element.dataset.en;
  });
  document.querySelectorAll(".not-found-home").forEach((link) => {
    link.setAttribute("href", "/en/");
    if (link.hasAttribute("aria-label"))
      link.setAttribute("aria-label", "Back to home");
  });
  const languageSwitch = document.querySelector(".language-switch");
  languageSwitch.href = "/404.html";
  languageSwitch.hreflang = "id";
  languageSwitch.lang = "id";
  languageSwitch.textContent = "ID";
  languageSwitch.setAttribute("aria-label", "Ganti ke Bahasa Indonesia");
  languageSwitch.title = "Ganti ke Bahasa Indonesia";
}
