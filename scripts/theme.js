const THEMES = {
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

export function setAccent(color, favicon) {
    const root = document.documentElement;
    const selected = THEMES[color];

    if (!selected) {
        return;
    }

    root.style.setProperty("--brand-rgb", selected.rgb);
    root.style.setProperty("--brand-light", selected.light);

    if (favicon) {
        favicon.href = selected.favicon;
    }
}

export function initThemeSwitcher() {
    const favicon = document.getElementById("site-favicon");
    const controls = document.querySelectorAll("[data-accent]");

    controls.forEach((control) => {
        control.addEventListener("click", () => {
            setAccent(control.dataset.accent, favicon);
        });

        control.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setAccent(control.dataset.accent, favicon);
            }
        });
    });

    setAccent("green", favicon);
}
