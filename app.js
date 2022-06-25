document.addEventListener("DOMContentLoaded", function () {
  var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar",
  });
});

// Active Tab
const tabEl = document.querySelectorAll(".tab_list li");
const contentEl = document.querySelectorAll(".content");

tabEl.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contentEl.forEach((content) => {
      content.classList.remove("active");
    });
    tabEl.forEach((tab) => {
      tab.classList.remove("active");
    });
    contentEl[index].classList.add("active");
    tabEl[index].classList.add("active");
  });
});

// Nav Scroll
const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const navHeight = navEl.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navEl.classList.add("fixed-nav");
    navEl.classList.add("container");
  } else {
    navEl.classList.remove("fixed-nav");
    navEl.classList.remove("container");
  }
});
