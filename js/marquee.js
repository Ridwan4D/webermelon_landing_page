document.addEventListener("DOMContentLoaded", function () {
    const marqueeInner = document.querySelector(".marquee_inner");
    const marqueeList = document.querySelector(".marquee_list");

    // Clone the list to create an infinite effect
    const clone = marqueeList.cloneNode(true);
    marqueeInner.appendChild(clone);

    // Ensure the entire content is wide enough for smooth animation
    marqueeInner.style.width = `${marqueeList.offsetWidth * 2}px`;
});
