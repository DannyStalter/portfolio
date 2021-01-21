// Start at top of page on Refresh

// $(document).ready(function(){
//     $(this).scrollTop(0);
// });

// Play/Pause Functionality

var myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

// Play/Pause Button Icon Image Switch

$('#audio-container').click(function(){
  icon = $(this).find("i");
  icon.toggleClass("fa-pause-circle fa-play-circle")
});

// Generates a random number to append to birdchirp_.mp3

function randomChirp() {
  var n = Math.random();
  n = Math.floor(n * 3) + 1;
return n;
}

// Sets birdChirp audio volumes

var birdchirp1 = document.getElementById("birdchirp1");
birdchirp1.volume = 0.5;

var birdchirp2 = document.getElementById("birdchirp2");
birdchirp2.volume = 0.5;

var birdchirp3 = document.getElementById("birdchirp3");
birdchirp3.volume = 0.5;


document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
      isVisible = top > document.querySelector('#about-me').offsetTop;

   if (isVisible) {
     document.getElementById('about-content').classList.add('animate');
   }
});
