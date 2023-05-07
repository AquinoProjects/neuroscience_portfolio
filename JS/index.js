window.addEventListener("DOMContentLoaded", () => {
  // Loader
  setTimeout(() => {
    $(".loader").style.opacity = 0;
    setTimeout(() => {
      $(".loader").style.display = "none";
    }, 500);
  }, 1000);

  // Scroll
  window.addEventListener("scroll", () => {
    //$(".header").classList.toggle("active", window.scrollY > 0);
  });

  // Slider


  // Dots Carousel

  let i = 0;

  const Slider = (index) => {
    for (let sliders of $$(".section__carousel")) {
      sliders.style.transform = `translateX(${-index * 100}%)`;
    }
  }

  function hideDot() {
    $$(".section__carousel_box_dot_box").forEach((dot) => {
      dot.classList.remove("active");
    });
  }
  function showDot(i = 0) {
    $$(".section__carousel_box_dot_box")[i].classList.add("active");
  }
  hideDot();
  showDot();

  $(".section__carousel_dots_container").addEventListener("click", (e) => {
    if (
      e.target.classList.contains("section__carousel_box_dot_box")
    ) {
      $$(".section__carousel_box_dot_box").forEach((dot, index) => {
        if (dot == e.target) {
          i = index;
          hideDot();
          showDot(i);
        }
      });
    }
  });

  $$(".section__carousel_box_dot_box").forEach((item, index) => {
    item.addEventListener("click", () => {
      i = index;
      Slider(i);
    });
  });

  $("#fa-right").addEventListener("click", () => {
    i++;
    if (i > $$(".section__carousel_box_dot_box").length - 1) {
      i = 0;
    }
    Slider(i);
    hideDot();
    showDot(i);
  });

  $("#fa-left").addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = $$(".section__carousel_box_dot_box").length - 1;
    }
    Slider(i);
    hideDot();
    showDot(i);
  });

  setInterval(() => {
    i++;
    if (i > $$(".section__carousel_box_dot_box").length - 1) {
      i = 0;
    }
    Slider(i);
    hideDot();
    showDot(i);
  }, 17000);

  // AOS Library
  AOS.init();

  // Menu
  function openShowNavbar() {
    //$(".secret").classList.add("active");
    $("body").style.overflow = "hidden";
  }

  function CloseHideNavbar() {
    //$(".secret").classList.remove("active");
    $("body").style.overflow = "";
  }

  $(".fa-bars").addEventListener("click", () => {
    openShowNavbar();
  });

  $(".fa-times").addEventListener("click", () => {
    CloseHideNavbar();
  });

  $$(".secret__link").forEach((link) => {
    link.addEventListener("click", () => {
      CloseHideNavbar();
    });
  });

  this.addEventListener("keydown", (event) => {
    if (event.code == "Escape") {
      CloseHideNavbar();
    }
  });

  function toggleCreateAula(buttonSectionSelector, containerSelector) {

    const buttonAula01 = document.querySelector(buttonSectionSelector);
    const container = document.querySelector(containerSelector);
    let toggleSection = false;

    container.style.transform = 'scale(0)';
    container.style.height = '0';

    buttonAula01.addEventListener('click', () => {
      let allContainers = document.querySelectorAll(".container.aulas");

      allContainers.forEach((e) => {
        e.style.transform = 'scale(0)';
        e.style.height = '0';
      });

      const buttonBase = document.querySelectorAll(".button-aula");
      buttonBase.forEach((e) => {
        e.style.backgroundColor = "black"
      })

      if (toggleSection) {
        container.style.transform = 'scale(0)';
        container.style.height = '0';
        buttonAula01.style.backgroundColor = "black"
      } else {
        container.style.transform = 'scale(1)';
        container.style.height = 'initial';
        buttonAula01.style.backgroundColor = "#4285F4"

      }
      toggleSection = !toggleSection;
    });
  }

  toggleCreateAula("body > section.section.first > div.container-buttons-aulas > button", "body > section.section.first > div.container");
  toggleCreateAula("body > section:nth-child(7) > div.container-buttons-aulas > button", "body > section:nth-child(7) > div.container")
  toggleCreateAula("body > section:nth-child(8) > div.container-buttons-aulas > button", "body > section:nth-child(8) > div.container")
  toggleCreateAula("body > section:nth-child(9) > div.container-buttons-aulas > button", "body > section:nth-child(9) > div.container")
  toggleCreateAula("body > section:nth-child(10) > div.container-buttons-aulas > button", "body > section:nth-child(10) > div.container")
  toggleCreateAula("body > section:nth-child(11) > div.container-buttons-aulas > button", "body > section:nth-child(11) > div.container")
  toggleCreateAula("body > section:nth-child(12) > div.container-buttons-aulas > button", "body > section:nth-child(12) > div.container")
  toggleCreateAula("body > section:nth-child(13) > div.container-buttons-aulas > button", "body > section:nth-child(13) > div.container")
  toggleCreateAula("body > section:nth-child(14) > div.container-buttons-aulas > button", "body > section:nth-child(14) > div.container")

});
