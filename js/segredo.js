// segredo.js — Carta secreta com senha

const input = document.getElementById('secretInput');
const btn = document.getElementById('secretBtn');
const erro = document.getElementById('secretError');
const lock = document.getElementById('secretLock');
const message = document.getElementById('secretMessage');

const SENHA = 'PrincessTitize';

btn.addEventListener('click', verificar);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') verificar();
});

function verificar() {
  if (input.value === SENHA) {
    lock.style.display = 'none';
    message.classList.add('visible');
  } else {
    erro.textContent = 'Senha incorreta. Só você sabe.';
    input.value = '';
    input.focus();
  }
}