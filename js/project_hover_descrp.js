document.addEventListener("DOMContentLoaded", function () {
  const card = document.getElementById("project-card");
  const desc = document.getElementById("description");

  card.addEventListener("mouseover", function () {
    desc.style.display = "block";
  });

  card.addEventListener("mouseout", function () {
    desc.style.display = "none";
  });
});
