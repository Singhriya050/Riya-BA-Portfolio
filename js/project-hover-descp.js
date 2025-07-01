document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".hover-box");

  projects.forEach((project) => {
    const caption = project.querySelector(".portfolio-item-details");

    // Initially hide the caption
    caption.style.display = "none";

    // Show on hover
    project.addEventListener("mouseover", () => {
      caption.style.display = "flex"; // or "block"
    });

    project.addEventListener("mouseout", () => {
      caption.style.display = "none";
    });
  });
});
