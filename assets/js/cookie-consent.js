document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('cookie-consent')) {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `<p>We use cookies to improve your experience. <a href="privacy.html">Learn more</a></p><button onclick="document.getElementById('cookie-banner').remove();localStorage.setItem('cookie-consent','1')">Accept</button>`;
    document.body.appendChild(banner);
  }
});
