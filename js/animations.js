// animations.js — Animação de entrada suave

const elementos = document.querySelectorAll(
  '.hero, .counter-section, .timeline-item, .gallery-slot, .letter, .letter-signature'
);

elementos.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

elementos.forEach(el => observer.observe(el));