// simple mobile menu + smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // close menu when clicking links (mobile)
  nav.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      nav.classList.remove('open');
    });
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1 && href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el){
          const offset = 72; // header height
          const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });
});

// Selecciona todas las imágenes dentro del slider de la sección entrenador
const trainerSlides = document.querySelectorAll('.trainer-img-slider .slide');
let currentTrainerSlide = 0;

function nextTrainerSlide() {
  // Quita la clase active de la imagen actual
  trainerSlides[currentTrainerSlide].classList.remove('active');
  
  // Pasa a la siguiente imagen (vuelve a la primera si terminó)
  currentTrainerSlide = (currentTrainerSlide + 1) % trainerSlides.length;
  
  // Activa la siguiente imagen
  trainerSlides[currentTrainerSlide].classList.add('active');
}

// Cambia de imagen cada 3 segundos
setInterval(nextTrainerSlide, 3000);
