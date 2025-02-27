window.addEventListener("load", updateCaseSection);
window.addEventListener("resize", updateCaseSection);

function updateCaseSection() {
    const caseSection = document.getElementById("case_study_section");
    const verticalLines = document.querySelectorAll(".case_vertical_line");
    const hrLines = document.querySelectorAll(".case_hr_line");

    if (caseSection) {
        const sectionHeight = caseSection.offsetHeight -500
        const sectionWidth = caseSection.offsetWidth - 425

        verticalLines.forEach((line) => {
            line.style.height = `${sectionHeight}px`;
        });

        hrLines.forEach((line) => {
            line.style.width = `${sectionWidth}px`;
        });
    }
}
