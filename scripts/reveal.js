export function setupScrollReveal() {
    const revealTargets = document.querySelectorAll(".card, .project-card");

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

                const target = entry.target;
                const cleanupReveal = (event) => {
                    if (event.propertyName !== "opacity") {
                        return;
                    }

                    target.classList.remove("reveal-on-scroll", "is-visible");
                    target.style.removeProperty("--reveal-delay");
                    target.removeEventListener("transitionend", cleanupReveal);
                };

                target.addEventListener("transitionend", cleanupReveal);
                target.classList.add("is-visible");
                observer.unobserve(target);
            });
        },
        {
            threshold: 0.05,
            rootMargin: "0px 0px 12% 0px"
        }
    );

    revealTargets.forEach((target, index) => {
        target.classList.add("reveal-on-scroll");
        target.style.setProperty("--reveal-delay", `${index * 80}ms`);
        observer.observe(target);
    });
}
