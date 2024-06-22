document.addEventListener('DOMContentLoaded', () => {
    const danSmall = document.querySelector('.dan-small');
    const danLarge = document.querySelector('.dan-large');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navlinks');
  
    // Hamburger menu open/close
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  
    // Nav Links close menu on click
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }));
  
    // Responsive picture resizing
    const resizePictures = x => {
      if (x.matches) {
        danSmall.classList.add('hide');
        danLarge.classList.remove('hide');
      } else {
        danSmall.classList.remove('hide');
        danLarge.classList.add('hide');
      }
    }
  
    const x = window.matchMedia("(min-width: 978px)");
    resizePictures(x);
    x.addListener(resizePictures);
  });
  