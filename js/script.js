window.addEventListener("load", () => {
    const topSection = document.getElementById("top_section");
    const verticalLines = document.querySelectorAll(".hero_vertical_line_1");

    if (topSection && verticalLines.length > 0) {
        const sectionHeight = topSection.offsetHeight + 17;

        verticalLines.forEach(line => {
            line.style.height = `${sectionHeight}px`;
        });
    }
});

window.addEventListener("resize", () => {
    const topSection = document.getElementById("top_section");
    const verticalLines = document.querySelectorAll(".hero_vertical_line_1");

    if (topSection && verticalLines.length > 0) {
        const sectionHeight = topSection.offsetHeight + 17;

        verticalLines.forEach(line => {
            line.style.height = `${sectionHeight}px`;
        });
    }
});
