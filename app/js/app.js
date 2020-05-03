document.addEventListener("DOMContentLoaded", function () {
  //  Sidebar menu -->
  const sidebar = document.querySelector(".sidebar");
  const openingBtn = document.querySelector(".sidebar__hamburger");
  const closingBtn = document.querySelector(".sidebar__close");

  openingBtn.addEventListener("click", () => {
    sidebar.classList.add("sidebar--opened");
  });
  closingBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--opened");
  });

  // Fade slider -->
  const slides = document.querySelectorAll(".fade-slider__item");
  const activeClass = "fade-slider__item--visible";
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove(activeClass);
    idx++;
    if (idx + 1 > slides.length) idx = 0;
    slides[idx].classList.add(activeClass);
  }, 4000);

  // Filter & Isotope plugin -->
  const elem = document.querySelector(".products__list");
  const iso = new Isotope(elem, {
    itemSelector: ".products__item",
    filter: ".popular",
  });

  const controllsFilter = document.querySelectorAll(".filter__link");
  const activeClassFilter = "filter__item--active";
  controllsFilter.forEach((ctr) => {
    ctr.addEventListener("click", (e) => {
      e.preventDefault();

      const filterName = ctr.getAttribute("data-filter");

      controllsFilter.forEach((link) => {
        link.closest(".filter__item").classList.remove(activeClassFilter);
      });

      ctr.closest(".filter__item").classList.add(activeClassFilter);

      iso.arrange({
        filter: `.${filterName}`,
      });
    });
  });

  // Isotope plugin -->
});
