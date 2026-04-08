function contatoWhats() {
  const numero = "5567999999999";
  const mensagem = "Olá, vi seu site e preciso de uma professora para substituição.";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
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

window.addEventListener("scroll", revealOnScroll);