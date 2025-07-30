ScrollReveal().reveal('.portfolioCard', {delay: 200, origin: 'bottom', distance:'50px', duration: 1500});
ScrollReveal().reveal('.hero', {delay: 100, duration: 2000});
ScrollReveal().reveal('.hero h2', {delay: 100, origin: 'bottom', distance:'10px', duration: 2000});
ScrollReveal().reveal('.previousNext', {delay: 100, duration: 2000});
ScrollReveal().reveal('.portfolioHeader', {delay: 100, duration: 2000});
ScrollReveal().reveal('.subNav', {delay: 0, duration: 2000});
ScrollReveal().reveal('.portfolioSection', {delay: 100, duration: 2000});
ScrollReveal().reveal('.cropped-image', {delay: 200, origin: 'bottom', distance:'50px', duration: 1500});
ScrollReveal().reveal('.cropped-image-long', {delay: 200, origin: 'bottom', distance:'50px', duration: 1500});
ScrollReveal().reveal('.cropped-image-large', {delay: 200, origin: 'bottom', distance:'50px', duration: 1500});


let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

