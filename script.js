// theme
const root = document.documentElement;
const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");
if (saved) root.dataset.theme = saved;

btn?.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});
//中文
// year
document.getElementById("year").textContent = new Date().getFullYear();
