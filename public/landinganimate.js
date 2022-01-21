var typed = new Typed(".typing", {
    strings: [" Grow", " Learn", " Build"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});


var counter = 1; //instantiate a counter
var maxImage = 4; //the total number of images that are available
setInterval(function() {
    document.querySelector('header').style.backgroundImage = "url('img/bg/" + (counter + 1) + ".jpg')";
    if (counter + 1 == maxImage) {
        counter = 0; //reset to start
    } else {
        ++counter; //iterate to next image
    }
}, 5000);