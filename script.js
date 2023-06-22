document.addEventListener("DOMContentLoaded", function() {
    const currentPathname = location.pathname;
    const menuItem = document.querySelectorAll(".menu a");

    menuItem.forEach(function(item) {
        if (currentPathname === item.pathname) {
            item.classList.add("active");
        }
    });
});

function downloadResume() {
    window.location.href = 'components/CV_JoseMPizarro.pdf'
}