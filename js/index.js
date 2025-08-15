class LanguageSwitcher {
    constructor() {
        this.enContent = document.getElementById("en-content");
        this.faContent = document.getElementById("fa-content");
        this.enBtn = document.querySelector(".en-btn");
        this.faBtn = document.querySelector(".fa-btn");

        this.init();
    }

    init() {
        this.enBtn.addEventListener("click", () => this.switchLanguage("en"));
        this.faBtn.addEventListener("click", () => this.switchLanguage("fa"));

        if (navigator.language.startsWith("fa")) {
            this.switchLanguage("fa");
        }
    }

    switchLanguage(lang) {
        if (lang === "en") {
            this.enContent.style.display = "block";
            this.faContent.style.display = "none";
            this.enBtn.classList.add("active");
            this.faBtn.classList.remove("active");
            document.documentElement.lang = "en";
        } else {
            this.enContent.style.display = "none";
            this.faContent.style.display = "block";
            this.enBtn.classList.remove("active");
            this.faBtn.classList.add("active");
            document.documentElement.lang = "fa";
        }

        localStorage.setItem("preferredLanguage", lang);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage");
    const languageSwitcher = new LanguageSwitcher();

    if (preferredLanguage) {
        languageSwitcher.switchLanguage(preferredLanguage);
    }
});
