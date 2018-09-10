var logoWrapper = document.getElementById('logoWrapper');
var video = document.getElementById('video');
var counter = 0;

function playVideo() {
  if(counter == 0) {
    if(video.currentTime == 0) {
      counter = 1;
      video.play();
    }
  }
}

logoWrapper.addEventListener('mousemove', playVideo);
logoWrapper.addEventListener('click', playVideo);