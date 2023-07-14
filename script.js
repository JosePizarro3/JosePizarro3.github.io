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

window.addEventListener("scroll", function() {
    const menuHeader = document.querySelector(".menu-header");
    const menuHeaderIcon = document.querySelector(".menu-header .icon");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      menuHeader.classList.add("scrolled");
      menuHeaderIcon.classList.add("covered");
    } else {
      menuHeader.classList.remove("scrolled");
      menuHeaderIcon.classList.remove("covered");
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

// Check if the user has visited the page before
if (localStorage.getItem('visited') !== 'true') {
  // Set visited flag to true
  localStorage.setItem('visited', 'true');
  
  // Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    // Create the pop-up element
    var popup = document.createElement('div');
    popup.classList.add('popup');
  
    // Create the close button
    var closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('close-button');
  
    // Create the message
    var message = document.createElement('p');
    message.textContent = 'This website is currently under development. You can take already while I finish it 😊';
  
    // Add the close button and message to the pop-up element
    popup.appendChild(closeButton);
    popup.appendChild(message);
  
    // Append the pop-up element to the body
    document.body.appendChild(popup);
  
    // Add event listener to close the pop-up when the close button is clicked
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  });
}