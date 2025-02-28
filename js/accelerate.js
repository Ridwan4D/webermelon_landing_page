window.addEventListener("load", updateAccelerateSection);
window.addEventListener("resize", updateAccelerateSection);

function updateAccelerateSection() {
  const accelerateContainer = document.querySelector(".accelerate_container");
  const verticalLines = document.querySelectorAll(".accelerate_v_line");
  const hrLines = document.querySelectorAll(".accelerate_hr_line");

  if (accelerateContainer) {
    const containerHeight = accelerateContainer.offsetHeight;
    const containerWidth = accelerateContainer.offsetWidth;

    // Set height for vertical lines
    verticalLines.forEach((line) => {
      line.style.height = `${containerHeight}px`;
    });

    // Set width for horizontal lines
    hrLines.forEach((line) => {
      line.style.width = `${containerWidth}px`;
    });
  }
}
