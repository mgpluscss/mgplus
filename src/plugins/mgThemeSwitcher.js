export default function registerThemeSwitcher(forceTheme) {
  const theme = forceTheme ? forceTheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark": false; 
  if (theme) 
  {
    document.documentElement.setAttribute("data-theme", theme);
  }
}
