const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-link");

menuIcon.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

const text = "SalonHub";
const container = document.querySelector(".bounce-text");

container.innerHTML = text
  .split("")
  .map(letter => `<span>${letter}</span>`)
  .join("");


  Image;



  document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  function checkScroll() {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (cardTop < screenHeight - 100) {
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

const salonCards = document.querySelectorAll('.salon-card');

const salonObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

salonCards.forEach(card => salonObserver.observe(card));


const testimonialCards = document.querySelectorAll('.testimonial-card');

const testimonialObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');

     
      const fill = entry.target.querySelector('.rating-fill');
      const value = parseFloat(fill.getAttribute('data-rating'));
      const percent = (value / 7) * 100; 
      fill.style.width = percent + '%';
    }
  });
}, {
  threshold: 0.2
});

testimonialCards.forEach(card => testimonialObserver.observe(card));


const aboutSection = document.querySelector('.about-section');

const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

aboutObserver.observe(aboutSection);