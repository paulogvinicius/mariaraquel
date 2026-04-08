function contatoWhats() {
    // Substitua pelo seu número (DDI + DDD + Número)
    const numero = "556796404728"; 
    const mensagem = encodeURIComponent("Olá! Gostaria de mais informações.");
    const url = `https://wa.me/${numero}?text=${mensagem}`;

    // Abre o link em uma nova aba
    window.open(url, '_blank');
}

/* ANIMAÇÃO AO ROLAR */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 50) {
      el.classList.add("active");
    }
  });
}

/* 🔥 CORREÇÃO AQUI */
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // <- resolve o problema
