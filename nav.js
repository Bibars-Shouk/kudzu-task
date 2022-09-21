const navBtn = document.querySelector("#nav-btn");
const navBody = document.querySelector("#nav-body");

navBtn.addEventListener("click", (e) => {
  navBtn.classList.toggle("open");
  navBody.classList.toggle("open");
  if (!navBody.classList.contains("open")) {
    navBody.style.transform = "translateX(-100%)";
  } else {
    navBody.style.transform = "translateX(0)";
  }
});
