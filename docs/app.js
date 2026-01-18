/* ============================================
   Dino Flip Facts - App
   Flash card game for tiny paleontologists
   ============================================ */

// --- Flash Card Data ---

// Beginner cards (ages 4-6) - simple clues, famous dinosaurs
const beginnerCards = [
  {
    clue: "I have tiny arms but a HUGE bite!",
    answer: "T-Rex",
    fact: "T-Rex had teeth as long as bananas!",
    era: "Late Cretaceous",
    size: "40 feet long",
  },
  {
    clue: "I have three horns on my face!",
    answer: "Triceratops",
    fact: "Triceratops means 'three-horned face'!",
    era: "Late Cretaceous",
    size: "30 feet long",
  },
  {
    clue: "I have big plates on my back and spikes on my tail!",
    answer: "Stegosaurus",
    fact: "Stegosaurus had a brain the size of a walnut!",
    era: "Late Jurassic",
    size: "30 feet long",
  },
  {
    clue: "I have a super long neck to eat from tall trees!",
    answer: "Brachiosaurus",
    fact: "Brachiosaurus was as tall as a 4-story building!",
    era: "Late Jurassic",
    size: "85 feet long",
  },
  {
    clue: "I'm covered in armor and have a club tail!",
    answer: "Ankylosaurus",
    fact: "My tail club could break bones!",
    era: "Late Cretaceous",
    size: "25 feet long",
  },
  {
    clue: "I have a big sail on my back!",
    answer: "Spinosaurus",
    fact: "Spinosaurus loved to swim and ate fish!",
    era: "Late Cretaceous",
    size: "50 feet long",
  },
  {
    clue: "I have a long tube on my head that makes sounds!",
    answer: "Parasaurolophus",
    fact: "My head crest worked like a trumpet!",
    era: "Late Cretaceous",
    size: "31 feet long",
  },
  {
    clue: "I'm small and fast with a big claw on each foot!",
    answer: "Velociraptor",
    fact: "Velociraptors were covered in feathers!",
    era: "Late Cretaceous",
    size: "6 feet long",
  },
  {
    clue: "I fly in the sky but I'm not a dinosaur!",
    answer: "Pterodactyl",
    fact: "Pterodactyls were flying reptiles!",
    era: "Late Jurassic",
    size: "3 feet wingspan",
  },
  {
    clue: "I'm a giant sea reptile with flippers!",
    answer: "Mosasaurus",
    fact: "Mosasaurus ruled the oceans!",
    era: "Late Cretaceous",
    size: "50 feet long",
  },
  {
    clue: "How did baby dinosaurs come into the world?",
    answer: "From eggs!",
    fact: "All dinosaurs laid eggs, just like birds!",
    era: "All eras",
    size: "Various",
  },
  {
    clue: "Did more dinosaurs eat plants or meat?",
    answer: "Plants!",
    fact: "Most dinosaurs loved munching on ferns and leaves.",
    era: "All eras",
    size: "Various",
  },
  {
    clue: "Did dinosaurs live at the same time as people?",
    answer: "No way!",
    fact: "Dinosaurs went extinct millions of years before humans!",
    era: "Mesozoic Era",
    size: "N/A",
  },
  {
    clue: "I have a super thick skull for headbutting!",
    answer: "Pachycephalosaurus",
    fact: "My skull was 10 inches thick!",
    era: "Late Cretaceous",
    size: "15 feet long",
  },
  {
    clue: "I'm one of the smallest dinosaurs, about chicken-sized!",
    answer: "Compsognathus",
    fact: "I was fast and ate lizards and bugs!",
    era: "Late Jurassic",
    size: "3 feet long",
  },
];

// Advanced cards (ages 7-9) - harder questions, more science
const advancedCards = [
  {
    clue: "I'm the largest carnivore ever, bigger than T-Rex, with a sail on my back.",
    answer: "Spinosaurus",
    fact: "Spinosaurus was 50+ feet long and hunted fish like a giant crocodile!",
    era: "Mid Cretaceous",
    size: "50-60 feet",
  },
  {
    clue: "My name means 'terrible claw' and I hunted in packs.",
    answer: "Deinonychus",
    fact: "Deinonychus inspired the 'raptors' in Jurassic Park!",
    era: "Early Cretaceous",
    size: "11 feet long",
  },
  {
    clue: "I'm the largest flying animal ever, with a 36-foot wingspan.",
    answer: "Quetzalcoatlus",
    fact: "Quetzalcoatlus was as tall as a giraffe when standing!",
    era: "Late Cretaceous",
    size: "36 foot wingspan",
  },
  {
    clue: "I'm the heaviest dinosaur ever discovered, weighing 70+ tons.",
    answer: "Argentinosaurus",
    fact: "Argentinosaurus weighed more than 10 elephants combined!",
    era: "Late Cretaceous",
    size: "115 feet long",
  },
  {
    clue: "I had over 500 teeth arranged in rows that replaced themselves.",
    answer: "Nigersaurus",
    fact: "Nigersaurus had a vacuum-cleaner shaped mouth for grazing!",
    era: "Mid Cretaceous",
    size: "30 feet long",
  },
  {
    clue: "I'm the first dinosaur ever named, discovered in 1824.",
    answer: "Megalosaurus",
    fact: "Scientists first thought I walked on four legs like a lizard!",
    era: "Middle Jurassic",
    size: "30 feet long",
  },
  {
    clue: "My fossils show I had feathers and couldn't fly.",
    answer: "Yutyrannus",
    fact: "Yutyrannus was a 30-foot feathered tyrannosaur!",
    era: "Early Cretaceous",
    size: "30 feet long",
  },
  {
    clue: "I'm the smartest dinosaur based on brain-to-body ratio.",
    answer: "Troodon",
    fact: "Troodon had forward-facing eyes for excellent depth perception!",
    era: "Late Cretaceous",
    size: "8 feet long",
  },
  {
    clue: "What asteroid impact ended the dinosaur era 66 million years ago?",
    answer: "Chicxulub",
    fact: "The crater is 110 miles wide and buried under Mexico!",
    era: "End Cretaceous",
    size: "6 mile asteroid",
  },
  {
    clue: "What era did dinosaurs live in?",
    answer: "Mesozoic Era",
    fact: "The Mesozoic is divided into Triassic, Jurassic, and Cretaceous periods!",
    era: "252-66 million years ago",
    size: "186 million years",
  },
  {
    clue: "I'm the oldest known dinosaur, from 243 million years ago.",
    answer: "Nyasasaurus",
    fact: "Nyasasaurus was found in Tanzania and may be a dinosaur ancestor!",
    era: "Middle Triassic",
    size: "6-10 feet long",
  },
  {
    clue: "I'm a marine reptile with four flippers and a very long neck.",
    answer: "Plesiosaurus",
    fact: "Plesiosaurs inspired the Loch Ness Monster legend!",
    era: "Early Jurassic",
    size: "15 feet long",
  },
  {
    clue: "What group of animals are dinosaurs' closest living relatives?",
    answer: "Birds",
    fact: "Birds evolved from small theropod dinosaurs!",
    era: "Present day",
    size: "Various",
  },
  {
    clue: "I'm a dome-headed dinosaur whose skull was 10 inches thick.",
    answer: "Pachycephalosaurus",
    fact: "Scientists debate whether we really headbutted or used our domes for display!",
    era: "Late Cretaceous",
    size: "15 feet long",
  },
  {
    clue: "I had the longest claws of any animal ever - 3 feet long!",
    answer: "Therizinosaurus",
    fact: "Despite the scary claws, I was actually a plant-eater!",
    era: "Late Cretaceous",
    size: "33 feet long",
  },
  {
    clue: "What type of rock are most dinosaur fossils found in?",
    answer: "Sedimentary rock",
    fact: "Layers of mud and sand buried bones and turned them to stone!",
    era: "All eras",
    size: "N/A",
  },
  {
    clue: "I'm the fastest dinosaur, running up to 45 mph.",
    answer: "Ornithomimus",
    fact: "My name means 'bird mimic' because I looked like an ostrich!",
    era: "Late Cretaceous",
    size: "12 feet long",
  },
  {
    clue: "How many horns did Triceratops actually have?",
    answer: "Three",
    fact: "Two large brow horns and one smaller nose horn!",
    era: "Late Cretaceous",
    size: "30 feet long",
  },
  {
    clue: "I'm a giant crocodile that lived with dinosaurs and ate them!",
    answer: "Sarcosuchus",
    fact: "Sarcosuchus was 40 feet long - twice the size of modern crocs!",
    era: "Early Cretaceous",
    size: "40 feet long",
  },
  {
    clue: "What is a paleontologist?",
    answer: "A dinosaur scientist",
    fact: "Paleontologists study fossils to learn about ancient life!",
    era: "Modern era",
    size: "N/A",
  },
];

// --- App State ---
let currentIndex = 0;
let currentLevel = "beginner";
let deck = [];

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
const beginnerBtn = document.getElementById("beginner-btn");
const advancedBtn = document.getElementById("advanced-btn");
const exitBtn = document.getElementById("exit-btn");
const cardArea = document.querySelector(".card-area");
const levelSelect = document.getElementById("level-select");

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
  cardTitle.textContent = currentLevel === "beginner" ? "Guess the Dino!" : "Challenge!";
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

function selectLevel(level) {
  currentLevel = level;
  const cards = level === "beginner" ? beginnerCards : advancedCards;
  deck = shuffle([...cards]);
  currentIndex = 0;
  cardCount.textContent = cards.length;
  updateCard();
  enterFullscreen();
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
// Note: Native Fullscreen API doesn't work on iOS Safari
// We use CSS-based fullscreen instead which works everywhere
function enterFullscreen() {
  document.body.classList.add("fullscreen");
  // Scroll to top to help hide mobile browser chrome
  window.scrollTo(0, 0);
}

function exitFullscreen() {
  document.body.classList.remove("fullscreen");
  window.scrollTo(0, 0);
}

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
beginnerBtn.addEventListener("click", () => selectLevel("beginner"));
advancedBtn.addEventListener("click", () => selectLevel("advanced"));
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
  // Default to beginner cards for display
  deck = shuffle([...beginnerCards]);
  cardCount.textContent = beginnerCards.length;
  updateCard();
  initTheme();
}

init();
