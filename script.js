// --- Bouton "Afficher plus / moins" dans le profil ---
const btnPlus = document.getElementById("btnPlus");
const resumeCourt = document.getElementById("resumeCourt");
const resumeComplet = document.getElementById("resumeComplet");

btnPlus.addEventListener("click", () => {
    const isHidden = resumeComplet.classList.contains("d-none");

    if (isHidden) {
        resumeComplet.classList.remove("d-none");
        resumeCourt.classList.add("d-none");
        btnPlus.textContent = "Afficher moins";
    } else {
        resumeComplet.classList.add("d-none");
        resumeCourt.classList.remove("d-none");
        btnPlus.textContent = "Afficher plus";
    }
});

// --- Animation des barres de compétences au scroll ---
const skillBars = document.querySelectorAll(".skill-bar");
let skillsAnimated = false;

function animateSkills() {
    const triggerBottom = window.innerHeight * 0.85;

    skillBars.forEach(bar => {
        const boxTop = bar.getBoundingClientRect().top;

        if (boxTop < triggerBottom && !skillsAnimated) {
            const level = bar.getAttribute("data-skill");
            bar.style.width = level + "%";
        }
    });

    // On évite de relancer en boucle
    skillsAnimated = true;
}

window.addEventListener("scroll", animateSkills);

// --- Scroll doux (smooth scroll) pour la navbar ---
const navLinks = document.querySelectorAll(".navbar a.nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// --- Mode sombre / mode clair ---
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = " Mode clair";
    } else {
        themeToggle.textContent = " Mode sombre";
    }
});
