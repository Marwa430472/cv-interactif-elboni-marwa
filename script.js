document.addEventListener("DOMContentLoaded", () => {
    // --- Bouton "Afficher plus / moins" dans le profil ---
    const btnPlus = document.getElementById("btnPlus");
    const resumeCourt = document.getElementById("resumeCourt");
    const resumeComplet = document.getElementById("resumeComplet");

    if (btnPlus && resumeCourt && resumeComplet) {
        btnPlus.addEventListener("click", () => {
            const isHidden = resumeComplet.classList.contains("d-none");

            resumeComplet.classList.toggle("d-none");
            resumeCourt.classList.toggle("d-none");
            btnPlus.textContent = isHidden ? "Afficher moins" : "Afficher plus";
        });
    }

    // --- Animation des barres de compétences ---
    const skillBars = document.querySelectorAll(".skill-bar");

    if ("IntersectionObserver" in window && skillBars.length) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const level = bar.getAttribute("data-skill") || 0;
                        bar.style.width = level + "%";
                        obs.unobserve(bar);
                    }
                });
            },
            { threshold: 0.3 }
        );

        skillBars.forEach(bar => observer.observe(bar));
    } else {
        // Fallback simple si IntersectionObserver n'est pas supporté
        skillBars.forEach(bar => {
            const level = bar.getAttribute("data-skill") || 0;
            bar.style.width = level + "%";
        });
    }

    // --- Mode sombre / mode clair ---
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isDark = document.body.classList.toggle("dark-mode");
            themeToggle.textContent = isDark ? "Mode clair" : "Mode sombre";
        });
    }
});
