// Animação ao carregar
window.onload = function() {
  document.body.style.opacity = "1";
};

// Botão WhatsApp com mensagem pronta
function chamarWhats() {
  let numero = "5543984046323"; // COLOCA SEU NÚMERO
  let mensagem = "Olá! Gostaria de transformar meu ambiente com adesivos.";

  let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

  window.open(url, "_blank");
}