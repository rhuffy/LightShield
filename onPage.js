var images = document.getElementsByTagName("img"),
    videos = document.getElementsByTagName("video");

var minOpacity = 0.05,
    refreshRate = 100,
    revealDelay = 2000;

replaceElements();
setInterval(replaceElements, refreshRate);

function replaceElements(){
  for (var i = 0; i < images.length; i++) {
    var len = images[i].src.length;
    if (images[i].src.substring(len - 3, len) === "gif" ||
        images[i].alt.substring(len - 3, len) === "gif" ||
        images[i].src.includes(".gif") ||
        images[i].alt.includes("gif")){
      if (!images[i].hasAttribute('inside')){
        images[i].setAttribute('inside', 0);
        images[i].style.opacity = minOpacity;
      }
      document.images[i].onload = obscure;
      document.images[i].onmouseenter = reveal;
      document.images[i].onmouseleave = obscure;
    }
  }
}

function reveal(){
  var thing = this;
  this.setAttribute('inside', 1);
  setTimeout(function() {
    if (thing.getAttribute('inside') == 1){
      thing.style.opacity = 1;
    }
  }, revealDelay);
}

function obscure(){
  this.setAttribute('inside', 0);
  this.style.opacity = minOpacity;
}
