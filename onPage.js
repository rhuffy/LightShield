var picture = chrome.extension.getURL("images/pepe.jpg"),
    video = chrome.extension.getURL("images/avo.mp4"),
    images = document.getElementsByTagName("img"),
    videos = document.getElementsByTagName("video");



setInterval(replaceElements, 500);


function replaceElements(){
  for (var i = 0; i < images.length; i++) {
    var len = images[i].src.length;
    if (images[i].src.substring(len - 3, len) === "gif" || images[i].alt.substring(len - 3, len) === "gif" || images[i].src.includes(".gif") || images[i].alt.includes("gif")){
      images[i].setAttribute("style", "opacity:0.1")
      //images[i].setAttribute("src", picture);
      //images[i].setAttribute("srcset", picture);
    }
  }
  // for (var i = 0; i < videos.length; i++) {
  //   var len = videos[i].src.length;
  //   videos[i].setAttribute("src", video);
  // };
}
