document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('fadein');
    element.style.opacity = 1; // Fait apparaitre le h1 en Fadein
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('fadein2');
    element.style.opacity = 1; // Fait apparaitre le h1 en Fadein
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('petitlogo');
    element.style.opacity = 1; // Fait apparaitre le h1 en Fadein
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var maBarre = document.getElementById('barre1anim');
  
    // Utilisation de setTimeout pour déclencher l'animation après un court délai (par exemple, 100ms)
    setTimeout(function() {
      maBarre.style.transform = 'scaleX(0.8)'; // Agrandir horizontalement vers la droite
    }, 100);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var maBarre = document.getElementById('barre2anim');
  
    // Utilisation de setTimeout pour déclencher l'animation après un court délai (par exemple, 100ms)
    setTimeout(function() {
      maBarre.style.transform = 'scaleX(0.8)'; // Agrandir horizontalement vers la droite
    }, 100);
  });
  

  //test navbar fixed

  /*var isNavbarFixed = false;
  var isElementFixed = false;
  
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('ul');
    var navbarPosition = navbar.getBoundingClientRect().top;
  
    if (navbarPosition <= 0 && !isNavbarFixed) {
      navbar.classList.add('fixed');
      isNavbarFixed = true;
    } else if (navbarPosition > 0 && isNavbarFixed) {
      navbar.classList.remove('fixed');
      isNavbarFixed = false;  
      


    }
  
    var element = document.getElementById('ul');
    var elementPosition = element.getBoundingClientRect().top;
  
    if (elementPosition <= 0 && !isElementFixed) {
      element.classList.add('fixed');
      isElementFixed = true;
    } else if (elementPosition > 0 && isElementFixed) {
      element.classList.remove('fixed');
      isElementFixed = false;
    }
    var scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition === 0 && isNavbarFixed) {
      navbar.classList.remove('fixed');
      isNavbarFixed = false;
    }
  });*/
