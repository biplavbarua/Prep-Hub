// Toggle the mobile navigation menu
const toggleNav = () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
};

// Smooth scroll to the target section
const smoothScroll = (target) => {
  const element = document.getElementById(target);
  const position = element.getBoundingClientRect().top + window.pageYOffset;
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: position
  });
};

// Add event listeners for the navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href').substr(1);
    smoothScroll(target);
    if (window.innerWidth < 768) {
      toggleNav();
    }
  });
});

// Add event listener for the mobile navigation menu button
const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', toggleNav);
