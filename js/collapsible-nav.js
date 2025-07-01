document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector('[data-toggle="collapsible-nav"]');
  const navMenu = document.getElementById(toggleButton.getAttribute('data-target'));

  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });
  }
});
