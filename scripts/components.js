function getCurrentLocale() {
    return document.documentElement.lang?.startsWith("en") ? "en" : "nl";
}

function getLocalizedAttribute(element, name) {
    const locale = getCurrentLocale();
    return element.getAttribute(`${name}-${locale}`) ?? element.getAttribute(name) ?? "";
}

class PortfolioBadge extends HTMLElement {
    connectedCallback() {
        if (!this.localeChangeHandler) {
            this.localeChangeHandler = () => this.render();
            document.addEventListener("portfolio:localechange", this.localeChangeHandler);
        }

        this.render();
    }

    disconnectedCallback() {
        if (this.localeChangeHandler) {
            document.removeEventListener("portfolio:localechange", this.localeChangeHandler);
        }
    }

    render() {
        const variant = this.getAttribute("variant") ?? "tag";
        const label = getLocalizedAttribute(this, "label");
        const className = {
            tag: "tag",
            pill: "pill",
            tech: "project-tech-tag"
        }[variant] ?? "tag";

        this.innerHTML = `<span class="${className}">${label}</span>`;
    }
}

class TimelineCard extends HTMLElement {
    connectedCallback() {
        if (!this.localeChangeHandler) {
            this.localeChangeHandler = () => this.render();
            document.addEventListener("portfolio:localechange", this.localeChangeHandler);
        }

        this.render();
    }

    disconnectedCallback() {
        if (this.localeChangeHandler) {
            document.removeEventListener("portfolio:localechange", this.localeChangeHandler);
        }
    }

    render() {
        const title = getLocalizedAttribute(this, "title");
        const date = this.getAttribute("date") ?? "";
        const company = getLocalizedAttribute(this, "company");
        const description = getLocalizedAttribute(this, "description");
        const dashed = this.getAttribute("dashed") === "true" ? " card--dashed" : "";
        this.innerHTML = `
            <article class="card${dashed}">
                <div class="card-header">
                    <h4>${title}</h4>
                    <span class="date">${date}</span>
                </div>
                <span class="company">${company}</span>
                <p>${description}</p>
            </article>
        `;
    }
}

class ProjectCardEntry extends HTMLElement {
    connectedCallback() {
        if (!this.localeChangeHandler) {
            this.localeChangeHandler = () => this.render();
            document.addEventListener("portfolio:localechange", this.localeChangeHandler);
        }

        this.render();
    }

    disconnectedCallback() {
        if (this.localeChangeHandler) {
            document.removeEventListener("portfolio:localechange", this.localeChangeHandler);
        }
    }

    render() {
        const title = getLocalizedAttribute(this, "title");
        const icon = this.getAttribute("icon") ?? "code";
        const tech = (getLocalizedAttribute(this, "tech") ?? "")
            .split("|")
            .filter(Boolean)
            .map((item) => `<portfolio-badge variant="tech" label="${item}"></portfolio-badge>`)
            .join("");
        const description = getLocalizedAttribute(this, "description");

        this.innerHTML = `
            <article class="project-card">
                <div class="project-header">
                    <div class="project-icon">
                        <i data-lucide="${icon}"></i>
                    </div>
                    <h4>${title}</h4>
                </div>
                <div class="project-tech-stack">
                    ${tech}
                </div>
                <p>${description}</p>
            </article>
        `;
    }
}

export function initComponents() {
    if (!customElements.get("portfolio-badge")) {
        customElements.define("portfolio-badge", PortfolioBadge);
    }

    if (!customElements.get("timeline-card")) {
        customElements.define("timeline-card", TimelineCard);
    }

    if (!customElements.get("project-card-entry")) {
        customElements.define("project-card-entry", ProjectCardEntry);
    }
}
