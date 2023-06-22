document.addEventListener("DOMContentLoaded", function() {
    const currentPathname = location.pathname;
    const menuItem = document.querySelectorAll(".menu ul li a");
  
    menuItem.forEach(function(item) {
      if (currentPathname === item.pathname || currentPathname === '') {
        item.classList.add("active");
      }
    });
  });

function downloadResume() {
    window.location.href = 'components/CV_JoseMPizarro.pdf'
}

window.addEventListener("scroll", function() {
    const menuHeader = document.querySelector(".menu-header");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      menuHeader.classList.add("scrolled");
    } else {
      menuHeader.classList.remove("scrolled");
    }
  });

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTop = document.getElementById("scrollToTop");

    scrollToTop.addEventListener("click", function() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
});