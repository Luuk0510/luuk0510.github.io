import { initComponents } from "./components.js";
import { initLocalization } from "./i18n.js";
import { setupScrollReveal } from "./reveal.js";
import { initThemeSwitcher } from "./theme.js";

initComponents();
initThemeSwitcher();
initLocalization();
if (window.lucide?.createIcons) {
    lucide.createIcons();
}
setupScrollReveal();
