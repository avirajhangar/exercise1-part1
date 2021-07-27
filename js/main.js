function myFunction() {
  const mobile_nav = document.querySelector(".mobile-nav");
  const mobile_nav_list = document.querySelector(".mobile-nav-menu-wrap");
  const lines = document.querySelectorAll(".line");

  if (
    mobile_nav.classList.contains("open-menu") &&
    mobile_nav_list.classList.contains("open-menu")
  ) {
    mobile_nav.classList.remove("open-menu");
    mobile_nav_list.classList.remove("open-menu");
    lines.forEach((line) => {
      line.classList.remove("open-menu");
    });
  } else {
    mobile_nav.classList.add("open-menu");
    mobile_nav_list.classList.add("open-menu");
    lines.forEach((line) => {
      line.classList.add("open-menu");
    });
  }
}
