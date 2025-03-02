const counts = document.querySelectorAll(".observe_infos");
const speed = 100;

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;

                function updateData() {
                    const target = Number(counter.getAttribute("data-target"));
                    let count = 0;
                    const increment = target / speed;

                    counter.innerText = "0 +";

                    const interval = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            counter.innerText = target;
                            clearInterval(interval);
                        } else {
                            counter.innerText = Math.floor(count);
                        }
                    }, 8);
                }

                updateData();
            }
        });
    },
    { threshold: 0.5 }
);

counts.forEach((counter) => {
    observer.observe(counter);
});

window.addEventListener("load", () => {
    const topSection = document.getElementById("top_section");
    const verticalLines = document.querySelectorAll(".hero_vertical_line_1");

    if (topSection && verticalLines.length > 0) {
        const sectionHeight = topSection.offsetHeight + 17;

        verticalLines.forEach((line) => {
            line.style.height = `${sectionHeight}px`;
        });
    }
});

window.addEventListener("resize", () => {
    const topSection = document.getElementById("top_section");
    const verticalLines = document.querySelectorAll(".hero_vertical_line_1");

    if (topSection && verticalLines.length > 0) {
        const sectionHeight = topSection.offsetHeight + 17;

        verticalLines.forEach((line) => {
            line.style.height = `${sectionHeight}px`;
        });
    }
});


new Swiper(".mySwiper", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});

 document.addEventListener("DOMContentLoaded", function () {
        const navbarToggler = document.getElementById("navbarToggler");
        const navbarCollapse = document.getElementById("navbarSupportedContent");
        const icon = navbarToggler.querySelector("span");

        // Define the close (X) icon using SVG
        const closeIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>`;

        const defaultIcon = `<span class="navbar-toggler-icon"></span>`; // Bootstrap default icon

        navbarToggler.addEventListener("click", function () {
            setTimeout(() => { // Wait for Bootstrap animation
                if (navbarCollapse.classList.contains("show")) {
                    icon.innerHTML = closeIcon; // Show "X" when open
                } else {
                    icon.innerHTML = defaultIcon; // Show default icon when closed
                }
            }, 200);
        });
    });