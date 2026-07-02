// lightbox.js — Abrir foto em tela cheia com navegação

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

const imagens = Array.from(document.querySelectorAll('.gallery-slot.filled img'));
let indexAtual = 0;

imagens.forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    indexAtual = imagens.indexOf(img);
    abrirLightbox(indexAtual);
  });
});

function abrirLightbox(index) {
  lightboxImg.src = imagens[index].src;
  lightboxImg.alt = imagens[index].alt;
  lightbox.classList.add('active');
}

function navegar(direcao) {
  indexAtual = (indexAtual + direcao + imagens.length) % imagens.length;
  abrirLightbox(indexAtual);
}

lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg && !e.target.closest('.lightbox-nav')) {
    lightbox.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') lightbox.classList.remove('active');
  if (e.key === 'ArrowLeft') navegar(-1);
  if (e.key === 'ArrowRight') navegar(1);
});

document.getElementById('prevBtn').addEventListener('click', () => navegar(-1));
document.getElementById('nextBtn').addEventListener('click', () => navegar(1));