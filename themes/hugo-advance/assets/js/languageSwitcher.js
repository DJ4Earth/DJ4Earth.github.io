var languageTrigger = document.getElementById('language-switcher-trigger');
var languageContainer = document.getElementById('language-container');
var languageSwitcher = document.getElementById('language-switcher');

if (languageTrigger) {
  languageTrigger.addEventListener('click', function(e) {
    languageSwitcher.classList.toggle('open');
  });
}

