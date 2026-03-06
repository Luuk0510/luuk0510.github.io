class PortfolioBadge extends HTMLElement {
    connectedCallback() {
        const variant = this.getAttribute("variant") ?? "tag";
        const label = this.getAttribute("label") ?? "";
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
        const title = this.getAttribute("title") ?? "";
        const date = this.getAttribute("date") ?? "";
        const company = this.getAttribute("company") ?? "";
        const description = this.getAttribute("description") ?? "";
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
        const title = this.getAttribute("title") ?? "";
        const icon = this.getAttribute("icon") ?? "code";
        const tech = (this.getAttribute("tech") ?? "")
            .split("|")
            .filter(Boolean)
            .map((item) => `<portfolio-badge variant="tech" label="${item}"></portfolio-badge>`)
            .join("");
        const description = this.getAttribute("description") ?? "";

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
