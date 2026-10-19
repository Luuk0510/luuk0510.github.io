function getCurrentLocale() {
    return document.documentElement.lang?.startsWith("en") ? "en" : "nl";
}

class LocalizedContent extends HTMLElement {
    connectedCallback() {
        this.localeChangeHandler ??= () => this.render();
        document.addEventListener("portfolio:localechange", this.localeChangeHandler);
        this.render();
    }

    disconnectedCallback() {
        document.removeEventListener("portfolio:localechange", this.localeChangeHandler);
    }

    render() {
        const locale = getCurrentLocale();

        this.querySelectorAll("[data-i18n-en]").forEach((element) => {
            // Keep the Dutch HTML text as the fallback, including after reconnecting.
            element.dataset.i18nNl ??= element.textContent;
            element.textContent = locale === "en"
                ? element.dataset.i18nEn
                : element.dataset.i18nNl;
        });
    }
}

export function initComponents() {
    ["portfolio-badge", "timeline-card", "project-card-entry"].forEach((name) => {
        if (!customElements.get(name)) {
            customElements.define(name, class extends LocalizedContent {});
        }
    });
}
