document.addEventListener("DOMContentLoaded", function () {
  // --> Sidebar menu:
  const sidebar = document.querySelector(".sidebar");
  const openingBtn = document.querySelector(".sidebar__hamburger");
  const closingBtn = document.querySelector(".sidebar__close");

  openingBtn.addEventListener("click", () => {
    sidebar.classList.add("sidebar--opened");
  });
  closingBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--opened");
  });
});
