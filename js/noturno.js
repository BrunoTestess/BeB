// noturno.js — Modo noturno automático por horário

function verificarHorario() {
  const hora = new Date().getHours();
  const noturno = hora >= 18 || hora < 6;

  if (noturno) {
    document.body.classList.add('noturno');
  }
}

verificarHorario();