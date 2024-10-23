//Toast trigger
const myToast = new bootstrap.Toast('.toast');

setTimeout(() => {
  myToast.show();
}, 1000);

//Scroll Navbar Color Switch (easier to read navbar over backgrounds)
const header = document.querySelector('#header');
const hero = document.querySelector('.hero');

const heroOptions = {};

const heroObserver = new IntersectionObserver(function(entries, heroObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
}, heroOptions);

heroObserver.observe(hero);