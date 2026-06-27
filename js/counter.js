// counter.js — Contador de tempo do relacionamento

const DATA_INICIO = new Date('2024-12-08T00:00:00');

function calcularTempo() {
  const agora = new Date();
  const diff = agora - DATA_INICIO;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const meses = Math.floor(dias / 30);
  const horas = Math.floor(diff / (1000 * 60 * 60));

  document.getElementById('dias').textContent = dias.toLocaleString('pt-BR');
  document.getElementById('meses').textContent = meses;
  document.getElementById('horas').textContent = horas.toLocaleString('pt-BR');
}

calcularTempo();
setInterval(calcularTempo, 60 * 1000);
