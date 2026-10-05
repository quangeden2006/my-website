/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const typingTexts = [
    "Python Developer",
    "Web Developer",
    "Creative Programmer",
    "Technology Enthusiast"
];

let textIndex = 0;
let characterIndex = 0;
let deleting = false;

function typingEffect() {

    const currentText = typingTexts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= typingTexts.length) {
                textIndex = 0;
            }
        }
    }

    const speed = deleting ? 45 : 85;

    setTimeout(typingEffect, speed);
}

typingEffect();


/* =========================
   SCROLL FUNCTION
========================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   PARTICLES
========================= */

const particleContainer =
    document.getElementById("particles");

function createParticles() {

    for (let i = 0; i < 80; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (6 + Math.random() * 14) + "s";

        particle.style.animationDelay =
            (Math.random() * 10) + "s";

        const size =
            Math.random() * 2 + 1;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";

        particleContainer.appendChild(particle);
    }
}

createParticles();


/* =========================
   CARD MOUSE EFFECT
========================= */

const cards =
    document.querySelectorAll(
        ".glass-card, .project-card, .contact-card"
    );

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-card, .skill-card, .project-card, .contact-card"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});