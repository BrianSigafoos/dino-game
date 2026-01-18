/* ============================================
   Dino Flip Facts - App
   Flash card game for tiny paleontologists
   Card data is loaded from data.js
   ============================================ */

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
const cardHintSection = document.getElementById("card-hint-section");
const cardHintMedia = document.getElementById("card-hint-media");
const cardHintImage = document.getElementById("card-hint-image");
const cardAnswerImageWrap = document.getElementById("card-answer-image-wrap");
const cardAnswerImage = document.getElementById("card-answer-image");
const cardHintToggle = document.getElementById("card-hint-toggle");
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
const readAloudBtn = document.getElementById("read-aloud-btn");

// --- Helper Functions ---
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildDeck(cards) {
  const withImages = cards.filter((card) => card.image || card.hintImage);
  const withoutImages = cards.filter((card) => !card.image && !card.hintImage);
  return [...withImages, ...shuffle(withoutImages)];
}

function updateCard() {
  const card = deck[currentIndex];
  cardTitle.textContent = currentLevel === "beginner" ? "Guess the Dino!" : "Challenge!";
  cardClue.textContent = card.clue;
  cardAnswer.textContent = card.answer;
  cardFact.textContent = card.fact;
  cardEra.textContent = card.era;
  cardSize.textContent = card.size;

  // Handle hint image on front of card
  if (card.hintImage) {
    cardHintImage.src = card.hintImage;
    cardHintImage.alt = card.hintAlt || "Dino hint image";
    cardHintSection.hidden = false;
    cardHintMedia.hidden = true;
    cardHintToggle.setAttribute("aria-expanded", "false");
    cardHintToggle.textContent = "🔍 Show Hint";
  } else {
    cardHintImage.removeAttribute("src");
    cardHintImage.alt = "";
    cardHintSection.hidden = true;
    cardHintMedia.hidden = true;
    cardHintToggle.setAttribute("aria-expanded", "false");
  }

  // Handle answer image on back of card
  if (card.image) {
    cardAnswerImage.src = card.image;
    cardAnswerImage.alt = card.imageAlt || `${card.answer} illustration`;
    cardAnswerImageWrap.hidden = false;
  } else {
    cardAnswerImage.removeAttribute("src");
    cardAnswerImage.alt = "";
    cardAnswerImageWrap.hidden = true;
  }

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
  deck = buildDeck([...cards]);
  currentIndex = 0;
  if (cardCount) cardCount.textContent = cards.length;
  updateCard();
  enterFullscreen();
}

function flipCard() {
  const isFlipped = cardEl.getAttribute("aria-pressed") === "true";
  cardEl.setAttribute("aria-pressed", !isFlipped);
}

function nextCard() {
  // Stop any ongoing speech
  if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    readAloudBtn.classList.remove("speaking");
    readAloudBtn.textContent = "🔊 Read Aloud";
  }
  currentIndex = (currentIndex + 1) % deck.length;
  updateCard();
}

function shuffleDeck() {
  const cards = currentLevel === "beginner" ? beginnerCards : advancedCards;
  deck = buildDeck([...cards]);
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
  // Stop any ongoing speech
  if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    readAloudBtn.classList.remove("speaking");
    readAloudBtn.textContent = "🔊 Read Aloud";
  }
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
cardEl.addEventListener("click", (e) => {
  // Don't flip card when clicking hint toggle
  if (e.target.closest(".card-hint-toggle")) {
    return;
  }
  flipCard();
});

function toggleHint(e) {
  e.stopPropagation();
  e.preventDefault();
  const isExpanded = cardHintToggle.getAttribute("aria-expanded") === "true";
  const nextState = !isExpanded;
  cardHintToggle.setAttribute("aria-expanded", String(nextState));
  cardHintMedia.hidden = !nextState;
  cardHintToggle.textContent = nextState ? "🔍 Hide Hint" : "🔍 Show Hint";
}

cardHintToggle.addEventListener("click", toggleHint);
cardHintToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleHint(e);
  }
});

// --- Read Aloud (Text-to-Speech) ---
function readClueAloud(e) {
  e.stopPropagation();
  e.preventDefault();

  // Check if speech synthesis is supported
  if (!("speechSynthesis" in window)) {
    return;
  }

  const synth = window.speechSynthesis;

  // If already speaking, stop
  if (synth.speaking) {
    synth.cancel();
    readAloudBtn.classList.remove("speaking");
    readAloudBtn.textContent = "🔊 Read Aloud";
    return;
  }

  const card = deck[currentIndex];
  const utterance = new SpeechSynthesisUtterance(card.clue);

  // Configure voice settings for kids
  utterance.rate = 0.85; // Slightly slower for kids
  utterance.pitch = 1.1; // Slightly higher pitch

  // Update button state
  readAloudBtn.classList.add("speaking");
  readAloudBtn.textContent = "🔊 Speaking...";

  utterance.onend = () => {
    readAloudBtn.classList.remove("speaking");
    readAloudBtn.textContent = "🔊 Read Aloud";
  };

  utterance.onerror = () => {
    readAloudBtn.classList.remove("speaking");
    readAloudBtn.textContent = "🔊 Read Aloud";
  };

  synth.speak(utterance);
}

readAloudBtn.addEventListener("click", readClueAloud);
readAloudBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    readClueAloud(e);
  }
});

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
  deck = buildDeck([...beginnerCards]);
  if (cardCount) cardCount.textContent = beginnerCards.length;
  updateCard();
  initTheme();
}

init();
