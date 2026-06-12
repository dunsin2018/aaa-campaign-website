document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.getElementById('navbar');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });
    document.querySelectorAll('.navbar__links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });
  }

  // Hide on scroll down, show on scroll up
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const current = window.scrollY;
    if (current > lastScroll && current > 80) {
      navbar.classList.add('navbar--hidden');
    } else {
      navbar.classList.remove('navbar--hidden');
    }
    lastScroll = current;
  });
});
