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
