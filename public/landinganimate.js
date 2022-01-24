var typed = new Typed(".typing", {
    strings: [" Grow", " Learn", " Build"],
    typeSpeed: 150,
    backSpeed: 30,
    loop: true
});

var images = ["img/bg-images/bg1.png","img/bg-images/bg2.png","img/bg-images/bg3.png","img/bg-images/bg4.png"];
var imageHead = document.getElementById("section-1");
var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 4000);





