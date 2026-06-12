function updateCountdown() {
  const election = new Date('2026-10-26T08:00:00-04:00');
  const diff = election - new Date();
  if (diff <= 0) {
    const el = document.getElementById('countdown');
    if (el) el.innerHTML = '<span class="countdown__done">ELECTION DAY — VOTE NOW!</span>';
    return;
  }
  const pad = n => String(Math.floor(n)).padStart(2, '0');
  const get = id => document.getElementById(id);
  if (get('days'))    get('days').textContent    = pad(diff / 86400000);
  if (get('hours'))   get('hours').textContent   = pad((diff % 86400000) / 3600000);
  if (get('minutes')) get('minutes').textContent = pad((diff % 3600000) / 60000);
  if (get('seconds')) get('seconds').textContent = pad((diff % 60000) / 1000);
}
setInterval(updateCountdown, 1000);
updateCountdown();
