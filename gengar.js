const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;
const gengarImg = document.querySelector('.gengar');

const langToggleBtn = document.getElementById('langToggle');
const flagImg = document.getElementById('flagImg');

const translations = {
  hu: {
    title: "Kacsko YouTube Csatorna",
    subtitle: "Válassz egy témát a menüből!",
    "nav.about": "Rólam",
    "nav.videos": "Videók",
    "nav.contact": "Kapcsolat",
    "nav.memes": "Memek"
  },
  en: {
    title: "Kacsko YouTube Channel",
    subtitle: "Choose a topic from the menu!",
    "nav.about": "About me",
    "nav.videos": "Videos",
    "nav.contact": "Contact",
    "nav.memes": "Memes"
  },
  de: {
    title: "Kacsko YouTube Kanal",
    subtitle: "Wähle ein Thema aus dem Menü!",
    "nav.about": "Über mich",
    "nav.videos": "Videos",
    "nav.contact": "Kontakt",
    "nav.memes": "Memes"
  }
};

const flags = {
  hu: "flags/hu.png",
  en: "flags/gb.png",
  de: "flags/de.png"
};

let currentLang = 'hu';

// Téma alkalmazása mentés vagy rendszer alapján
function applyDarkModeFromStorage() {
  const savedTheme = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'enabled' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
    gengarImg.src = 'gengar-removebg-preview.png';
  } else {
    body.classList.remove('dark-mode');
    gengarImg.src = 'espeon.png';
  }
}

applyDarkModeFromStorage();

// Gomb esemény: sötét/világos mód váltás
toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  gengarImg.src = isDark ? 'gengar-removebg-preview.png' : 'espeon.png';
});

// Nyelv beállítása
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  flagImg.src = flags[lang];
  flagImg.alt = lang.toUpperCase();
}

// Nyelvváltó gomb esemény
langToggleBtn.addEventListener('click', () => {
  if (currentLang === 'hu') setLanguage('en');
  else if (currentLang === 'en') setLanguage('de');
  else setLanguage('hu');
});

// Alapértelmezett nyelv
setLanguage(currentLang);
