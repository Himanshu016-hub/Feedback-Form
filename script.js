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
  "Yeh akhir nahi, bas ek chhota sa pause hai. 💭💖",
];

const form = document.getElementById("feedbackForm");
let alreadySubmitted = false;

form.addEventListener("submit", function (e) {
  if (alreadySubmitted) return;

  e.preventDefault();
  alreadySubmitted = true;

  showPopup();
  launchConfetti();

  setTimeout(() => {
    form.submit();
  }, 1500);

  setTimeout(() => {
    form.reset();
    form.style.pointerEvents = "none";
    form.style.opacity = "0.6";
  }, 1500);
});

function showPopup() {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = messages[Math.floor(Math.random() * messages.length)];

  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("hide"), 1000);
  setTimeout(() => popup.remove(), 5600);
}

function launchConfetti() {
  const colors = [
    "#ff4d4d",
    "#ffd93d",
    "#6bcf63",
    "#4d96ff",
    "#ff6ec7",
    "#ffffff",
  ];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}
