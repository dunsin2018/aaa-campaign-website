// Parallax for hero sections
document.addEventListener('scroll', function() {
  const heroes = document.querySelectorAll('.hero--parallax');
  heroes.forEach(hero => {
    const scroll = window.scrollY;
    hero.style.backgroundPositionY = (scroll * 0.4) + 'px';
  });
});
