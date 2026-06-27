// music.js — Música de fundo

const audio = document.getElementById('audio');
const btn = document.getElementById('musicBtn');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = '♫';
    btn.classList.add('playing');
  } else {
    audio.pause();
    btn.textContent = '♪';
    btn.classList.remove('playing');
  }
});