document.addEventListener("DOMContentLoaded", function() {
    const currentPathname = location.pathname;
    const menuItem = document.querySelectorAll(".menu ul li a");
  
    menuItem.forEach(function(item) {
      if (currentPathname === item.pathname || currentPathname === `${item.pathname}` || (currentPathname === "" && item.pathname === "/index.html")) {
        item.classList.add("active");
      }
    });
  });

function downloadResume() {
    window.location.href = 'components/CV_JoseMPizarro.pdf'
}