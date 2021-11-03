const header = document.querySelector(".header-fixed");
const headerHeight = header.offsetHeight;

function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

let toggleHeaderClass = function() {
  scrollpos = window.scrollY;
  if (scrollpos >= headerHeight) {
    header.classList.add("header-scrolled")
  } else {
    header.classList.remove("header-scrolled")
  }
};

if (header) {
  window.addEventListener('scroll', debounce(toggleHeaderClass, 100))
}

