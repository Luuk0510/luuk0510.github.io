lucide.createIcons();

const favicon = document.getElementById("site-favicon");
const revealTargets = document.querySelectorAll(".card, .project-card");

function setAccent(color) {
    const root = document.documentElement;
    const themes = {
        green: {
            rgb: "16, 185, 129",
            light: "#34d399",
            favicon: "assets/icons/green_favicon.ico"
        },
        yellow: {
            rgb: "245, 158, 11",
            light: "#fbbf24",
            favicon: "assets/icons/yellow_favicon.ico"
        },
        red: {
            rgb: "244, 63, 94",
            light: "#fb7185",
            favicon: "assets/icons/red_favicon.ico"
        }
    };

    const selected = themes[color];
    if (!selected) {
        return;
    }

    root.style.setProperty("--brand-rgb", selected.rgb);
    root.style.setProperty("--brand-light", selected.light);

    if (favicon) {
        favicon.href = selected.favicon;
    }
}

document.querySelectorAll("[data-accent]").forEach((control) => {
    control.addEventListener("click", () => {
        setAccent(control.dataset.accent);
    });

    control.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setAccent(control.dataset.accent);
        }
    });
});

function setupScrollReveal() {
    if (!revealTargets.length) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealTargets.forEach((target) => target.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.05,
            rootMargin: "0px 0px 12% 0px"
        }
    );

    revealTargets.forEach((target, index) => {
        target.classList.add("reveal-on-scroll");
        target.style.transitionDelay = `${index * 80}ms`;
        observer.observe(target);
    });
}

setAccent("green");
setupScrollReveal();
