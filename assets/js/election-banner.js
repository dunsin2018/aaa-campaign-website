document.addEventListener('DOMContentLoaded', function() {
  const election = new Date('2026-10-26T08:00:00-04:00');
  const now = new Date();
  const days = Math.ceil((election - now) / 86400000);
  if (days > 0 && days <= 30) {
    const bar = document.createElement('div');
    bar.className = 'election-alert-bar';
    bar.innerHTML = `<strong>ELECTION DAY IN ${days} DAYS</strong> — October 26, 2026 — <a href="https://stcatharines.ca" target="_blank" rel="noopener">Find Your Polling Station</a>`;
    document.body.prepend(bar);
  }
});
