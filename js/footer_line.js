window.addEventListener("load", updateFooterLines);
window.addEventListener("resize", updateFooterLines);

function updateFooterLines() {
    const footerContainer = document.getElementById("footer_section");
    const verticalLines = document.querySelectorAll(".footer_v_line");
    const horizontalLines = document.querySelectorAll(".footer_hr_line");

    if (footerContainer) {
        const containerHeight = footerContainer.offsetHeight;
        const containerWidth = footerContainer.offsetWidth;

        // Set the height of vertical lines
        verticalLines.forEach(line => {
            line.style.height = `${containerHeight}px`;
        });

        // Set the width of horizontal lines
        horizontalLines.forEach(line => {
            line.style.width = `${containerWidth}px`;
        });
    }
}
