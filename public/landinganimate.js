var typed = new Typed(".typing", {
    strings: [" Grow", " Learn", " Build"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});

var images = ["img/bg/1.jpg", "img/bg/2.jpg", "img/bg/3.jpg", "img/bg/4.jpg"];
var imageHead = document.getElementById("section-1");
var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 1000);