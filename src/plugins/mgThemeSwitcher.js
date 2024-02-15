export default function registerThemeSwitcher() {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark": false;
  if (theme) document.documentElement.setAttribute("data-theme", theme);
}
