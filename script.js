document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll(".menu a");

    menuItem.forEach(function(item) {
        if (currentLocation === item.href) {
            item.classList.add("active");
        }
    });
});

function downloadResume() {
    window.location.href = 'components/CV_JoseMPizarro.pdf'
}