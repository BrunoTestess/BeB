// petalas.js — Pétalas flutuantes no hero

const hero = document.querySelector('.hero');
const TOTAL = 18;

for (let i = 0; i < TOTAL; i++) {
  const petala = document.createElement('div');
  petala.classList.add('petala');

  const tamanho = Math.random() * 8 + 5;
  petala.style.width = `${tamanho}px`;
  petala.style.height = `${tamanho}px`;
  petala.style.left = `${Math.random() * 100}%`;
  petala.style.animationDuration = `${Math.random() * 4 + 4}s`;
  petala.style.animationDelay = `${Math.random() * 6}s`;
  petala.style.opacity = Math.random() * 0.5 + 0.2;

  hero.appendChild(petala);
}