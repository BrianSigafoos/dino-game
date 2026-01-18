/* ============================================
   Dino Flip Facts - App
   Flash card game for tiny paleontologists
   ============================================ */

// --- Flash Card Data ---
const cards = [
  {
    title: "T-Rex",
    clue: "I have tiny arms but a HUGE bite. Who am I?",
    answer: "Tyrannosaurus Rex",
    fact: "T-Rex had teeth as long as bananas!",
    era: "Late Cretaceous",
    size: "40 feet long",
  },
  {
    title: "Triceratops",
    clue: "I have three horns on my face. Who am I?",
    answer: "Triceratops",
    fact: "Triceratops means 'three-horned face' and they ate plants!",
    era: "Late Cretaceous",
    size: "30 feet long",
  },
  {
    title: "Stegosaurus",
    clue: "I have big plates on my back and spikes on my tail. Who am I?",
    answer: "Stegosaurus",
    fact: "Stegosaurus had a brain the size of a walnut!",
    era: "Late Jurassic",
    size: "30 feet long",
  },
  {
    title: "Velociraptor",
    clue: "I'm small and fast with a big claw on each foot. Who am I?",
    answer: "Velociraptor",
    fact: "Velociraptors were covered in feathers like birds!",
    era: "Late Cretaceous",
    size: "6 feet long",
  },
  {
    title: "Brachiosaurus",
    clue: "I have a super long neck to eat leaves from tall trees. Who am I?",
    answer: "Brachiosaurus",
    fact: "Brachiosaurus was as tall as a 4-story building!",
    era: "Late Jurassic",
    size: "85 feet long",
  },
  {
    title: "Pterodactyl",
    clue: "I'm not a dinosaur but I flew in the sky with them. Who am I?",
    answer: "Pterodactyl",
    fact: "Pterodactyls were flying reptiles, not dinosaurs!",
    era: "Late Jurassic",
    size: "3 feet wingspan",
  },
  {
    title: "Ankylosaurus",
    clue: "I'm covered in armor and have a club on my tail. Who am I?",
    answer: "Ankylosaurus",
    fact: "Ankylosaurus could swing its tail club hard enough to break bones!",
    era: "Late Cretaceous",
    size: "25 feet long",
  },
  {
    title: "Spinosaurus",
    clue: "I have a big sail on my back and loved to swim. Who am I?",
    answer: "Spinosaurus",
    fact: "Spinosaurus was even bigger than T-Rex and ate fish!",
    era: "Late Cretaceous",
    size: "50 feet long",
  },
  {
    title: "Diplodocus",
    clue: "I have a super long tail that I can crack like a whip. Who am I?",
    answer: "Diplodocus",
    fact: "Diplodocus could whip its tail faster than the speed of sound!",
    era: "Late Jurassic",
    size: "90 feet long",
  },
  {
    title: "Parasaurolophus",
    clue: "I have a long tube on my head that makes sounds. Who am I?",
    answer: "Parasaurolophus",
    fact: "The crest on its head worked like a trumpet to make loud calls!",
    era: "Late Cretaceous",
    size: "31 feet long",
  },
  {
    title: "Pachycephalosaurus",
    clue: "I have a super thick skull that I use to headbutt. Who am I?",
    answer: "Pachycephalosaurus",
    fact: "Its skull was 10 inches thick - like wearing a bone helmet!",
    era: "Late Cretaceous",
    size: "15 feet long",
  },
  {
    title: "Allosaurus",
    clue: "I'm a big meat-eater with bumps above my eyes. Who am I?",
    answer: "Allosaurus",
    fact: "Allosaurus was the top predator of the Jurassic period!",
    era: "Late Jurassic",
    size: "40 feet long",
  },
  {
    title: "Compsognathus",
    clue: "I'm one of the smallest dinosaurs, about the size of a chicken. Who am I?",
    answer: "Compsognathus",
    fact: "Compy was fast and ate lizards and bugs!",
    era: "Late Jurassic",
    size: "3 feet long",
  },
  {
    title: "Iguanodon",
    clue: "I have a big spike on my thumb. Who am I?",
    answer: "Iguanodon",
    fact: "Iguanodon was one of the first dinosaurs ever discovered!",
    era: "Early Cretaceous",
    size: "33 feet long",
  },
  {
    title: "Mosasaurus",
    clue: "I'm a giant sea reptile with flippers and big teeth. Who am I?",
    answer: "Mosasaurus",
    fact: "Mosasaurus ruled the oceans and could eat sharks!",
    era: "Late Cretaceous",
    size: "50 feet long",
  },
  {
    title: "Dino Eggs",
    clue: "How did baby dinosaurs come into the world?",
    answer: "From eggs!",
    fact: "All dinosaurs laid eggs, just like birds and reptiles today.",
    era: "All eras",
    size: "Various",
  },
  {
    title: "Plant Eaters",
    clue: "Did more dinosaurs eat plants or meat?",
    answer: "Plants!",
    fact: "Most dinosaurs were herbivores - they loved munching on ferns and leaves.",
    era: "All eras",
    size: "Various",
  },
  {
    title: "Dino Timeline",
    clue: "Did dinosaurs live at the same time as humans?",
    answer: "No way!",
    fact: "Dinosaurs went extinct 65 million years before the first humans!",
    era: "Mesozoic Era",
    size: "N/A",
  },
  {
    title: "Biggest Dino",
    clue: "What was the biggest dinosaur ever?",
    answer: "Argentinosaurus",
    fact: "It weighed as much as 15 elephants put together!",
    era: "Late Cretaceous",
    size: "115 feet long",
  },
  {
    title: "Fastest Dino",
    clue: "Which dinosaur could run the fastest?",
    answer: "Ornithomimus",
    fact: "It could run up to 45 mph - as fast as a car in a neighborhood!",
    era: "Late Cretaceous",
    size: "12 feet long",
  },
];

// --- App State ---
let currentIndex = 0;
let deck = [...cards];

// --- DOM Elements ---
const cardEl = document.getElementById("card");
const cardTitle = document.getElementById("card-title");
const cardClue = document.getElementById("card-clue");
const cardAnswer = document.getElementById("card-answer");
const cardFact = document.getElementById("card-fact");
const cardEra = document.getElementById("card-era");
const cardSize = document.getElementById("card-size");
const cardIndex = document.getElementById("card-index");
const cardTotal = document.getElementById("card-total");
const cardCount = document.getElementById("card-count");
const progressFill = document.getElementById("progress-fill");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const flipBtn = document.getElementById("flip-btn");
const themeToggle = document.getElementById("theme-toggle");
const playBtn = document.getElementById("play-btn");
const exitBtn = document.getElementById("exit-btn");
const cardArea = document.querySelector(".card-area");

// --- Helper Functions ---
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function updateCard() {
  const card = deck[currentIndex];
  cardTitle.textContent = "Who Am I?";
  cardClue.textContent = card.clue;
  cardAnswer.textContent = card.answer;
  cardFact.textContent = card.fact;
  cardEra.textContent = card.era;
  cardSize.textContent = card.size;

  // Update progress
  cardIndex.textContent = currentIndex + 1;
  cardTotal.textContent = deck.length;
  const progress = ((currentIndex + 1) / deck.length) * 100;
  progressFill.style.width = `${progress}%`;

  // Reset flip state
  cardEl.setAttribute("aria-pressed", "false");
}

function flipCard() {
  const isFlipped = cardEl.getAttribute("aria-pressed") === "true";
  cardEl.setAttribute("aria-pressed", !isFlipped);
}

function nextCard() {
  currentIndex = (currentIndex + 1) % deck.length;
  updateCard();
}

function shuffleDeck() {
  deck = shuffle(deck);
  currentIndex = 0;
  updateCard();
}

// --- Theme Management ---
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-pressed", theme === "dark");
}

function initTheme() {
  const stored = localStorage.getItem("theme");
  const theme = stored || getSystemTheme();
  applyTheme(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
}

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

// --- Fullscreen Mode ---
function enterFullscreen() {
  document.body.classList.add("fullscreen");
  // Try native fullscreen API on mobile
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  document.body.classList.remove("fullscreen");
  if (document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

// Listen for native fullscreen exit (e.g., pressing Escape)
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    document.body.classList.remove("fullscreen");
  }
});
document.addEventListener("webkitfullscreenchange", () => {
  if (!document.webkitFullscreenElement) {
    document.body.classList.remove("fullscreen");
  }
});

// --- Swipe Gestures ---
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  const minSwipeDistance = 50;

  // Only handle horizontal swipes (ignore vertical scrolling)
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
    if (deltaX < 0) {
      // Swipe left -> next card
      nextCard();
    } else {
      // Swipe right -> previous card
      prevCard();
    }
  }
}

function prevCard() {
  currentIndex = (currentIndex - 1 + deck.length) % deck.length;
  updateCard();
}

cardArea.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  },
  { passive: true }
);

cardArea.addEventListener(
  "touchend",
  (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  },
  { passive: true }
);

// --- Event Listeners ---
cardEl.addEventListener("click", flipCard);
nextBtn.addEventListener("click", nextCard);
shuffleBtn.addEventListener("click", shuffleDeck);
flipBtn.addEventListener("click", flipCard);
themeToggle.addEventListener("click", toggleTheme);
playBtn.addEventListener("click", enterFullscreen);
exitBtn.addEventListener("click", exitFullscreen);

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter") {
    if (document.activeElement === cardEl) {
      e.preventDefault();
      flipCard();
    }
  }
  if (e.key === "ArrowRight" || e.key === "n") {
    nextCard();
  }
  if (e.key === "ArrowLeft" || e.key === "p") {
    prevCard();
  }
  if (e.key === "f") {
    flipCard();
  }
  if (e.key === "s") {
    shuffleDeck();
  }
  if (e.key === "Escape") {
    exitFullscreen();
  }
});

// --- Initialize ---
function init() {
  cardCount.textContent = cards.length;
  deck = shuffle(deck);
  updateCard();
  initTheme();
}

init();
