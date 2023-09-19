/**
 * Allows to download the file from the location href.
 */
function downloadFile(file) {
    window.location.href = file
}
/**
 * Covers the top menu and top=left icon with a dark background when scrolling down
 */
function handleScroll() {
  const menuHeader = document.querySelector('.menu-header')
  const menuHeaderIcon = document.querySelector('.menu-header .icon')
  const scrollPosition = window.scrollY

  if (scrollPosition > 0) {
    menuHeader.classList.add('scrolled')
    menuHeaderIcon.classList.add('covered')
  } else {
    menuHeader.classList.remove('scrolled')
    menuHeaderIcon.classList.remove('covered')
  }
}
/**
 * Checks if the user has visited the page before. If not, shows a warning message.
 */ 
function handleFirstVisit() {
  if (localStorage.getItem('visited') !== 'true') {
    localStorage.visited = 'true'
    // Create the pop-up element
    const popup = document.createElement('div')
    popup.classList.add('popup')
  
    // Create the close button
    const closeButton = document.createElement('span')
    closeButton.innerHTML = '&times;'
    closeButton.classList.add('close-button')
  
    // Create the message
    const message = document.createElement('p')
    message.textContent = 'This website is currently under development. However, you can already take a look while I finish it 😊'
  
    // Add the close button and message to the pop-up element
    popup.appendChild(closeButton)
    popup.appendChild(message)
  
    // Append the pop-up element to the body
    document.body.appendChild(popup)
  
    // Add event listener to close the pop-up when the close button is clicked
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none'
    })
  }
}
/**
 * Adds .active to ".menu ul li a" for the active html.
 */
function setActiveMenuItem() {
  const currentPathname = location.pathname
  const menuItem = document.querySelectorAll('.menu ul li a')

  menuItem.forEach(function(item) {
      if ((currentPathname === '/' && item.getAttribute('href') === 'index.html') || (currentPathname === item.pathname)) {
          item.classList.add('active')
      }
  })
}

/**
 * Adds events to the document:
 *  1- Add .active to the active html.
 *  2- Add smooth scroll to top when the arrow-top button is clicked.
 *  3- If the page has not been visited yet, it pops up a warning message.
 */
document.addEventListener("DOMContentLoaded", function() {
  setActiveMenuItem()

  // Adding smooth scrollToTop if the fa-arrow-top button is clicked
  const scrollToTop = document.getElementById("scrollToTop")
  scrollToTop.addEventListener("click", function() {
      window.scrollTo({
      top: 0,
      behavior: "smooth"
      })
  })
  
  handleFirstVisit()

  // Dark Mode Toggle
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode')
  }

  const darkModeToggle = document.querySelector('.floating-dark-mode')
  const darkModeIcon = darkModeToggle.querySelector('.fas') // Assuming the icon with the class 'fas' is a direct child of the darkModeToggle
  const body = document.querySelector('body')
  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode')
    darkModeToggle.classList.toggle('dark')
    
    if (body.classList.contains('dark-mode')) {
      darkModeIcon.classList.remove('fa-moon')
      darkModeIcon.classList.add('fa-sun')
      localStorage.setItem('dark-mode', 'enabled')
    } else {
      darkModeIcon.classList.remove('fa-sun')
      darkModeIcon.classList.add('fa-moon')
      localStorage.removeItem('dark-mode')
    }
  })
})

window.addEventListener('scroll', handleScroll)
