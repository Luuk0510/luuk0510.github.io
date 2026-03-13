const STORAGE_KEY = "portfolio-locale";

const translations = {
    nl: {
        documentTitle: "Luuk Spruijtenburg - Softwareontwikkelaar",
        accentRed: "Accent: Rood",
        accentYellow: "Accent: Geel",
        accentGreen: "Accent: Groen",
        accentRedLabel: "Zet accentkleur op rood",
        accentYellowLabel: "Zet accentkleur op geel",
        accentGreenLabel: "Zet accentkleur op groen",
        languageSelector: "Selecteer taal",
        profileImageAlt: "Portret van Luuk Spruijtenburg",
        profileRole: "Software Ontwikkelaar",
        profilesHeading: "Profielen",
        skillsHeading: "Vaardigheden",
        personalFocusHeading: "Persoonlijke focus",
        languagesHeading: "Talen",
        interestsHeading: "Interesses",
        linkedinLabel: "LinkedIn-profiel",
        githubLabel: "GitHub-profiel",
        nativeLanguage: "Nederlands",
        nativeLevel: "Moedertaal",
        englishLanguage: "Engels",
        englishLevel: "Zeer goed",
        aboutTitle: "Over mij",
        aboutParagraph1: "Ik ben een softwareontwikkelaar en zit momenteel in het vierde jaar van de opleiding Informatica aan Avans Hogeschool in Den Bosch. Ik zet mijn passie voor programmeren om in praktische vaardigheden met verschillende programmeertalen en frameworks.",
        aboutParagraph2: "Ik houd van technische uitdagingen en werk graag samen in een team om doelen te bereiken. Daarnaast ben ik analytisch sterk en vertaal ik complexe opdrachten naar goed werkende processen of programma's. Ik ben leergierig en sta altijd open om mijzelf verder te ontwikkelen.",
        experienceTitle: "Werkervaring",
        educationTitle: "Opleidingen",
        projectsTitle: "Projecten",
        githubMore: "Bekijk de rest op GitHub",
        githubMoreLabel: "Bekijk de rest van mijn projecten op GitHub"
    },
    en: {
        documentTitle: "Luuk Spruijtenburg - Software Developer",
        accentRed: "Accent: Red",
        accentYellow: "Accent: Yellow",
        accentGreen: "Accent: Green",
        accentRedLabel: "Set accent color to red",
        accentYellowLabel: "Set accent color to yellow",
        accentGreenLabel: "Set accent color to green",
        languageSelector: "Select language",
        profileImageAlt: "Portrait of Luuk Spruijtenburg",
        profileRole: "Software Developer",
        profilesHeading: "Profiles",
        skillsHeading: "Skills",
        personalFocusHeading: "Personal focus",
        languagesHeading: "Languages",
        interestsHeading: "Interests",
        linkedinLabel: "LinkedIn profile",
        githubLabel: "GitHub profile",
        nativeLanguage: "Dutch",
        nativeLevel: "Native",
        englishLanguage: "English",
        englishLevel: "Highly proficient",
        aboutTitle: "About me",
        aboutParagraph1: "I am a software developer and currently in the fourth year of the Computer Science program at Avans University of Applied Sciences in Den Bosch. I turn my passion for programming into practical skills across different languages and frameworks.",
        aboutParagraph2: "I enjoy technical challenges and like working in a team to reach shared goals. I am analytically strong and translate complex assignments into solid processes or applications. I am eager to learn and always open to developing myself further.",
        experienceTitle: "Work experience",
        educationTitle: "Education",
        projectsTitle: "Projects",
        githubMore: "View the rest on GitHub",
        githubMoreLabel: "View the rest of my projects on GitHub"
    }
};

function resolveLocale(locale) {
    return locale === "en" ? "en" : "nl";
}

function getTranslation(locale, key) {
    return translations[locale]?.[key] ?? translations.nl[key] ?? key;
}

function updateText(locale) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = getTranslation(locale, key);
    });
}

function updateAttributes(locale) {
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
        const mappings = element.dataset.i18nAttr.split(",");

        mappings.forEach((mapping) => {
            const [attribute, key] = mapping.split(":").map((item) => item.trim());

            if (!attribute || !key) {
                return;
            }

            element.setAttribute(attribute, getTranslation(locale, key));
        });
    });
}

function updateTypewriter(locale) {
    const typewriter = document.querySelector(".typewriter");

    if (!typewriter) {
        return;
    }

    const label = getTranslation(locale, "profileRole");
    typewriter.textContent = label;
    typewriter.style.setProperty("--typewriter-ch", `${Math.max(label.length, 1)}`);
}

function updateLanguageControls(locale) {
    document.querySelectorAll("[data-locale]").forEach((button) => {
        const isActive = button.dataset.locale === locale;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

export function applyLocale(locale, options = {}) {
    const nextLocale = resolveLocale(locale);
    const { persist = true } = options;

    document.documentElement.lang = nextLocale;
    document.title = getTranslation(nextLocale, "documentTitle");

    updateText(nextLocale);
    updateAttributes(nextLocale);
    updateTypewriter(nextLocale);
    updateLanguageControls(nextLocale);

    document.dispatchEvent(
        new CustomEvent("portfolio:localechange", {
            detail: { locale: nextLocale }
        })
    );

    if (window.lucide?.createIcons) {
        lucide.createIcons();
    }

    if (persist) {
        window.localStorage.setItem(STORAGE_KEY, nextLocale);
    }
}

export function initLocalization() {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    const browserLocale = navigator.language?.toLowerCase().startsWith("en") ? "en" : "nl";
    const initialLocale = resolveLocale(storedLocale ?? browserLocale);

    document.querySelectorAll("[data-locale]").forEach((button) => {
        button.addEventListener("click", () => {
            applyLocale(button.dataset.locale);
        });
    });

    applyLocale(initialLocale, { persist: false });
}
