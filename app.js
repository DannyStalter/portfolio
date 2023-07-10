var danSmall = document.querySelector('.dan-small');
var danLarge = document.querySelector('.dan-large');
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.navlinks');

//Hamburger menu open/close
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

//Nav Links close menu on click
document.querySelectorAll('.navlinks').forEach(n => n.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}));

//Responsive picture resizing
function myFunction(x) {
    if (x.matches) { // If media query matches
        danSmall.classList.add('hide');
        danLarge.classList.remove('hide');
    } else {
        danSmall.classList.remove('hide');
        danLarge.classList.add('hide');
    }
  }
  
  var x = window.matchMedia("(min-width: 978px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes - depreciated but listed in W3Schools