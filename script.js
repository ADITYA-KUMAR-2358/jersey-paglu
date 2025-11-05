const launchDate = new Date("2025-12-25T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = launchDate - now;
  const zero = val => String(val).padStart(2, '0');

  if (diff <= 0) {
    ['days','hours','minutes','seconds'].forEach(id => document.getElementById(id).textContent = '00');
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = zero(days);
  document.getElementById('hours').textContent = zero(hours);
  document.getElementById('minutes').textContent = zero(minutes);
  document.getElementById('seconds').textContent = zero(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
