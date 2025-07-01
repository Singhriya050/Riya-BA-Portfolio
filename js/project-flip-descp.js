document.addEventListener("DOMContentLoaded", function () {
  const figures = document.querySelectorAll(".portfolio-item");
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".modal-close");

  figures.forEach(figure => {
    figure.addEventListener("click", () => {
      const title = figure.querySelector(".portfolio-item-title").textContent;
      const desc = figure.querySelector(".portfolio-item-description").textContent;

      modalTitle.textContent = title;
      modalDescription.textContent = desc;

      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
