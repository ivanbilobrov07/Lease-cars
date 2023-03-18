const tabItem = document.querySelectorAll(".tabs-btn-item");
const tabContent = document.querySelectorAll(".tabs-content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;
  tabItem.forEach(function (item) {
    item.classList.remove("active");
  });

  tabTarget.classList.add("active");

  tabContent.forEach(function (item) {
    item.classList.remove("active");
  });

  document.querySelector(`#${button}`).classList.add("active");
}

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
