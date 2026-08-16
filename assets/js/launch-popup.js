document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('launchPopupModal');
  var closeBtn = document.getElementById('launchPopupClose');
  if (!modal || !closeBtn) return;

  var start = new Date('2026-08-16T00:00:00-04:00');
  var end = new Date('2026-08-22T23:59:59-04:00');
  var now = new Date();
  if (now < start || now > end) return;

  modal.classList.add('open');

  function close() {
    modal.classList.remove('open');
  }
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') close();
  });
});
