window.addEventListener("load", () => {
    const topSection = document.getElementById("service_section");
    const verticalLines = document.querySelectorAll(".service_vertical_line");

    if (topSection && verticalLines.length > 0) {
        const sectionHeight = topSection.offsetHeight + 17;

        verticalLines.forEach((line) => {
            line.style.height = `${sectionHeight}px`;
        });
    }
});

window.addEventListener("resize", () => {
    const topSection = document.getElementById("service_section");
    const verticalLines = document.querySelectorAll(".service_vertical_line");

    if (topSection && verticalLines.length > 0) {
        const sectionHeight = topSection.offsetHeight + 17;

        verticalLines.forEach((line) => {
            line.style.height = `${sectionHeight}px`;
        });
    }
});
