// Countdown Timer - 7 hours loop
function startCountdown() {
  const countdown = document.getElementById("countdown");
  let deadline = new Date().getTime() + 7 * 60 * 60 * 1000; // 7 hours

  function updateTimer() {
    let now = new Date().getTime();
    let distance = deadline - now;

    if (distance < 0) {
      // Reset timer when it ends
      deadline = new Date().getTime() + 7 * 60 * 60 * 1000;
      distance = deadline - now;
    }

    let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((distance / (1000 * 60)) % 60);
    let seconds = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}
startCountdown();

// Anime.js animations
anime({
  targets: '.hero h1',
  translateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1200
});

anime({
  targets: '.btn-primary',
  scale: [0.8, 1],
  opacity: [0, 1],
  easing: 'easeOutElastic(1, .8)',
  duration: 1500,
  delay: 500
});
