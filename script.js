/* ================================
   CONFIGURAÇÕES
================================ */
const checkoutLink = "https://pay.kiwify.com.br/rMgeeK5";
const supportEmail = "suporte.rocketmarket@gmail.com";

/* ================================
   REDIRECIONAMENTOS
================================ */
function goCheckout() {
  window.location.href = checkoutLink;
}

function openSupport() {
  window.location.href = supportEmail;
}

/* ================================
   PROVA SOCIAL (POPUP)
================================ */
const profiles = [
  "lucas.money",
  "rafael.lifestyle",
  "joaosilva.ofc",
  "bruno.vision",
  "andre.daily",
  "matheusflow",
  "pedro.hustle",
  "gabriel.routine",
  "thiago.mindset",
  "vitor.wealth",
  "caio.dinheiro",
  "leonardo.vibes",
  "felipe.lux",
  "renato.cash",
  "daniel.urban",
  "marcos.daily",
  "gustavo.life",
  "henrique.flow",
  "arthur.money",
  "rodrigo.lifestyle",
  "lucasvision.br",
  "rafael.daily",
  "bruno.cash",
  "joaovision",
  "pedrolife.ofc",
  "andre.money",
  "thiagolife",
  "matheusdaily",
  "victor.cash",
  "gabriellux",
  "caioflow.br",
  "leoroutine",
  "danielmoney",
  "marcosvision",
  "felipehustle",
  "arthurlife",
  "rodrigodaily",
  "gustavocash",
  "henriquelux",
  "renatovision"
];


const popup = document.getElementById("sales-popup");

function showPopup() {
  if (!popup) return;

  const name = profiles[Math.floor(Math.random() * profiles.length)];

  popup.innerHTML = `👀 <strong>${name}</strong> acabou de ver esse conteúdo`;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 4000);
}

/* ================================
   TIMING REALISTA
================================ */
// Primeiro popup após alguns segundos
setTimeout(() => {
  showPopup();

  // Próximos popups em tempo aleatório
  setInterval(() => {
    showPopup();
  }, Math.floor(Math.random() * (16000 - 10000) + 10000));

}, 6000);
