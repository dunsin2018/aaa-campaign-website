document.addEventListener('DOMContentLoaded', function() {
  var KEY = 'joinPopupSeen';
  try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}

  var modal = document.createElement('div');
  modal.className = 'join-popup-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Ways to support the campaign');
  modal.innerHTML =
    '<div class="join-popup-modal__inner">' +
      '<button class="join-popup-modal__close" aria-label="Close">&times;</button>' +
      '<p class="label-tag">JOIN THE CAMPAIGN</p>' +
      '<h3>Help Us Build a Stronger St. Catharines</h3>' +
      '<div class="join-popup-modal__roles">' +
        '<p class="join-popup-modal__roles-title">Volunteer Opportunities</p>' +
        '<ul>' +
          '<li>Door-to-door canvassing</li>' +
          '<li>Phone banking</li>' +
          '<li>Social media support</li>' +
          '<li>Event setup &amp; logistics</li>' +
          '<li>Driving supporters to polls</li>' +
          '<li>Translation / multilingual outreach</li>' +
          '<li>Office support</li>' +
        '</ul>' +
      '</div>' +
      '<div class="join-popup-modal__options">' +
        '<a class="join-popup-modal__option" href="get-involved.html#volunteer">' +
          '<span class="join-popup-modal__icon">&#129309;</span>' +
          '<span><strong>Sign Up to Volunteer</strong>Tell us how you&rsquo;d like to help</span>' +
        '</a>' +
        '<a class="join-popup-modal__option" href="get-involved.html?lawn-sign=1">' +
          '<span class="join-popup-modal__icon">&#127968;</span>' +
          '<span><strong>Request a Lawn Sign</strong>Show your support in your neighbourhood</span>' +
        '</a>' +
        '<a class="join-popup-modal__option join-popup-modal__option--donate" href="donate.html">' +
          '<span class="join-popup-modal__icon">&#128155;</span>' +
          '<span><strong>Donate</strong>Fuel the campaign with a contribution</span>' +
        '</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(modal);

  function close() {
    modal.classList.remove('open');
    try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
  }
  var lawnModal = document.getElementById('lawnSignModal');
  modal.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;
    if (link.getAttribute('href').indexOf('lawn-sign') !== -1 && lawnModal) {
      e.preventDefault();
      close();
      lawnModal.classList.add('open');
    } else if (link.pathname === location.pathname) {
      close();
    }
  });
  modal.querySelector('.join-popup-modal__close').addEventListener('click', close);
  modal.addEventListener('click', function(e) { if (e.target === modal) close(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') close(); });

  setTimeout(function() {
    var launch = document.getElementById('launchPopupModal');
    if (launch && launch.classList.contains('open')) return;
    modal.classList.add('open');
  }, 6000);
});
