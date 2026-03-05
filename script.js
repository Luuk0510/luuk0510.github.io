lucide.createIcons();

function setAccent(color) {
    const root = document.documentElement;
    const themes = {
        green: { rgb: "16, 185, 129", light: "#34d399" },
        yellow: { rgb: "245, 158, 11", light: "#fbbf24" },
        red: { rgb: "244, 63, 94", light: "#fb7185" }
    };

    const selected = themes[color];
    if (!selected) {
        return;
    }

    root.style.setProperty("--brand-rgb", selected.rgb);
    root.style.setProperty("--brand-light", selected.light);
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
