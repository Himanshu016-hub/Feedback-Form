const messages = [
  "Apna khayal rakhna… yaadon mein rahoge. 🥹💛",
  "Tumhari kami mehsoos hoti rahegi. 🤍✨",
  "Film abhi khatam nahi hui, bas is scene pe cut hai. 🎬✂️",
  "Main chal raha hoon, par kahani ka safar jaari hai. 🚶‍♂️📖",
  "Phir mulaqat hogi, kisi aur mod pe. 🌸🛣️",
  "Alvida kehna aasan nahi, isliye bas keh raha hoon—phir milenge. 🥲🤝",
  "Yeh goodbye nahi, sirf thoda sa interval hai. ⏸️😊",
  "Jab waqt saath dega, hum phir aamne-saamne honge. ⏳💫",
  "Ijaazat leta hoon, yaadein dil mein sambhaal ke. 🫶🎒",
  "Yeh akhir nahi, bas ek chhota sa pause hai. 💭💖"
];

const form = document.getElementById("feedbackForm");
let submitted = false;
const SUBMIT_DELAY = 800;

form.addEventListener("submit", e => {
  if (submitted) return;

  e.preventDefault();
  submitted = true;

  showPopup();

  setTimeout(() => {
    form.submit();
    form.reset();
    form.style.pointerEvents = "none";
    form.style.opacity = "0.6";
  }, SUBMIT_DELAY);
});

function showPopup() {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.textContent =
    messages[Math.floor(Math.random() * messages.length)];

  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("hide"), 8000);
  setTimeout(() => popup.remove(), 8600);
}
