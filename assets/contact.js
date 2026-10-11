const briefPanel = document.querySelector("#brief-panel");
const briefForm = document.querySelector("#contact-brief");
const briefPreview = document.querySelector("#brief-preview");
const briefText = document.querySelector("#brief-preview-text");
const briefWhatsApp = document.querySelector("#brief-whatsapp");
const briefEnglish = document.documentElement.lang === "en";
const requestedSubject = new URLSearchParams(location.search).get("subject");
const briefLanguageSwitch = document.querySelector(".language-switch");

function keepConversationTopic() {
  const destination = new URL(briefLanguageSwitch.href);
  destination.searchParams.set("subject", briefForm.elements.subject.value);
  briefLanguageSwitch.href = destination.pathname + destination.search;
}

if (["teaching", "research", "development"].includes(requestedSubject)) {
  briefForm.elements.subject.value = requestedSubject;
  keepConversationTopic();
}
briefForm.elements.subject.addEventListener("change", keepConversationTopic);
briefPanel.hidden = false;

briefForm.addEventListener("input", (event) => {
  if (
    event.target instanceof HTMLInputElement ||
    event.target instanceof HTMLTextAreaElement
  ) {
    event.target.setCustomValidity("");
  }
  briefPreview.hidden = true;
  briefWhatsApp.href = "https://wa.me/6282232623434";
});

briefForm.addEventListener("submit", (event) => {
  event.preventDefault();
  for (const field of [briefForm.elements.name, briefForm.elements.message]) {
    field.setCustomValidity(
      field.value.trim()
        ? ""
        : briefEnglish
          ? "Please complete this field."
          : "Mohon isi bagian ini.",
    );
  }
  if (!briefForm.reportValidity()) return;
  const data = new FormData(briefForm);
  const name = data.get("name").trim();
  const organization = data.get("organization").trim();
  const subject =
    briefForm.elements.subject.selectedOptions[0].textContent.trim();
  const message = data.get("message").trim();
  const lines = briefEnglish
    ? [
        "Hello Arya,",
        "",
        `Name: ${name}`,
        ...(organization
          ? [`Institution / organization: ${organization}`]
          : []),
        `Topic: ${subject}`,
        "",
        message,
      ]
    : [
        "Halo Pak Arya,",
        "",
        `Nama: ${name}`,
        ...(organization ? [`Institusi / organisasi: ${organization}`] : []),
        `Topik: ${subject}`,
        "",
        message,
      ];
  const draft = lines.join("\n");
  briefText.textContent = draft;
  briefWhatsApp.href = `https://wa.me/6282232623434?text=${encodeURIComponent(draft)}`;
  briefPreview.hidden = false;
  briefPreview.focus({ preventScroll: true });
  briefPreview.scrollIntoView({ block: "nearest" });
});
