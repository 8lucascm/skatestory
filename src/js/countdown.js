// Countdown Timer
function updateCountdown() {
  // Data de lançamento: 8 de dezembro de 2025
  const releaseDate = new Date('2025-12-08T00:00:00').getTime();
  const now = new Date().getTime();
  const difference = releaseDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Update DOM
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Smooth scroll for "Saiba Mais" button
document.addEventListener('DOMContentLoaded', function() {
  const learnMoreBtn = document.getElementById('learn-more-btn');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Wishlist button
  const wishlistBtn = document.getElementById('wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', function() {
      window.open('https://store.steampowered.com/app/1263240/Skate_Story/', '_blank');
    });
  }
});

