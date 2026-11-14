// Add your real social profile URLs here before publishing.
const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@1vortex_gd2",
  youtube: "https://youtube.com/@vortexyt2975?si=nKbHsPNeJ791EMaA",
  telegram: "https://t.me/VORTEXYTTT2974"
};

// Paste a direct release/JAR URL here when the mod download is ready.
const MOD_DOWNLOAD_URL = "#";

const overlay = document.getElementById("overlay");
const openSettings = () => { overlay.classList.add("open"); overlay.setAttribute("aria-hidden","false"); };
const closeSettings = () => { overlay.classList.remove("open"); overlay.setAttribute("aria-hidden","true"); };
document.getElementById("settingsOpen").addEventListener("click", openSettings);
document.getElementById("settingsClose").addEventListener("click", closeSettings);
overlay.addEventListener("click", e => { if (e.target === overlay) closeSettings(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeSettings(); });

document.querySelectorAll("[data-social]").forEach(link => {
  const url = SOCIAL_LINKS[link.dataset.social];
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.addEventListener("click", e => {
    if (!url || url.includes("YOUR_")) { e.preventDefault(); alert("Добавь свою ссылку в SOCIAL_LINKS в файле script.js."); }
  });
});

const download = document.getElementById("downloadLink");
download.href = MOD_DOWNLOAD_URL;
download.addEventListener("click", e => {
  if (MOD_DOWNLOAD_URL === "#") { e.preventDefault(); alert("Ссылка на скачивание мода появится здесь после публикации релиза."); }
});

function setTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  document.querySelectorAll("[data-theme-choice]").forEach(b => b.classList.toggle("active", b.dataset.themeChoice === theme));
  localStorage.setItem("vl-theme", theme);
}
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en][data-ru]").forEach(el => { el.innerHTML = el.dataset[lang]; });
  document.querySelectorAll("[data-lang-choice]").forEach(b => b.classList.toggle("active", b.dataset.langChoice === lang));
  localStorage.setItem("vl-language", lang);
}
document.querySelectorAll("[data-theme-choice]").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.themeChoice)));
document.querySelectorAll("[data-lang-choice]").forEach(b => b.addEventListener("click", () => setLanguage(b.dataset.langChoice)));
setTheme(localStorage.getItem("vl-theme") || "dark");
setLanguage(localStorage.getItem("vl-language") || "en");
document.getElementById("year").textContent = new Date().getFullYear();
