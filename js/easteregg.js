// easteregg.js — Chuva de corações ao clicar nos nomes

const names = document.querySelector('.names');
let ativo = false;

names.style.cursor = 'pointer';

names.addEventListener('click', () => {
  if (ativo) return;
  ativo = true;

  for (let i = 0; i < 30; i++) {
    setTimeout(() => criarCoracao(), i * 60);
  }

  setTimeout(() => ativo = false, 3000);
});

function criarCoracao() {
  const coracao = document.createElement('span');
  coracao.textContent = '🤍';
  coracao.style.cssText = `
    position: fixed;
    font-size: ${Math.random() * 20 + 14}px;
    left: ${Math.random() * 100}vw;
    top: ${Math.random() * 40 + 10}vh;
    opacity: 1;
    pointer-events: none;
    z-index: 9999;
    transition: transform 2s ease, opacity 2s ease;
  `;

  document.body.appendChild(coracao);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      coracao.style.transform = `translateY(-${Math.random() * 200 + 100}px)`;
      coracao.style.opacity = '0';
    });
  });

  setTimeout(() => coracao.remove(), 2200);
}