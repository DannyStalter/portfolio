// var htmlBar = document.querySelector('.html-bar');
// var htmlLength = htmlBar.style.width.slice(0, -1);
// var cssBar = document.querySelector('.css-bar');
// varcssLength = cssBar.style.width.slice(0, -1);
//
// document.addEventListener("DOMContentLoaded", function() {
//
//
//   var width = 0;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= htmlLength) {
//       clearInterval(id);
//     } else {
//       width++;
//       htmlBar.style.width = width + '%';
//       htmlBar.innerHTML = width * 1  + '%';
//     }
//   }
// });




// Iterates through each class, but animation effect happens too quickly.
// let classArray = ['.html-bar', '.css-bar', '.javascript-bar', '.php-bar', '.react-bar'];
// for (var i = 0; i < classArray.length; i++) {
//   var elem = document.querySelector(classArray[i]);
//   var barLength = elem.style.width.slice(0, -1);
//
//   var width = 0;
//   var id = setInterval(frame, 10);
//
//   function frame() {
//     if (width >= barLength) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//       elem.innerHTML = width * 1  + '%';
//     }
//   };
//   console.log(elem);
//   console.log(classArray[i]);
// }
