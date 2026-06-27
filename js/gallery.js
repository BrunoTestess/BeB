// gallery.js — Galeria de fotos interativa

const LABELS = [
  'Primeiro Date',
  'Primeira Viagem',
  'No Estádio',
  'Memória especial',
  'Nossa foto',
  'Juntos'
];

const gallery = document.getElementById('gallery');
const fileInput = document.getElementById('fileInput');
const slots = [];

function criarSlot(index) {
  const slot = document.createElement('div');
  slot.className = 'gallery-slot';
  slot.innerHTML = `
    <span class="icon">+</span>
    <span class="slot-label">${LABELS[index]}</span>
  `;

  slot.addEventListener('click', () => {
    if (!slot.classList.contains('filled')) {
      fileInput.dataset.target = index;
      fileInput.click();
    }
  });

  slots.push(slot);
  gallery.appendChild(slot);
}

function preencherSlot(index, src) {
  const slot = slots[index];
  slot.classList.add('filled');
  slot.innerHTML = `
    <img src="${src}" alt="Memória ${index + 1}" />
    <button class="remove-btn" title="Remover foto">✕</button>
  `;

  slot.querySelector('.remove-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    limparSlot(index);
  });
}

function limparSlot(index) {
  const slot = slots[index];
  slot.classList.remove('filled');
  slot.innerHTML = `
    <span class="icon">+</span>
    <span class="slot-label">${LABELS[index]}</span>
  `;

  slot.addEventListener('click', () => {
    if (!slot.classList.contains('filled')) {
      fileInput.dataset.target = index;
      fileInput.click();
    }
  });
}

fileInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const index = parseInt(this.dataset.target);
  const reader = new FileReader();

  reader.onload = (ev) => {
    preencherSlot(index, ev.target.result);
  };

  reader.readAsDataURL(file);
  this.value = '';
});

LABELS.forEach((_, i) => criarSlot(i));
