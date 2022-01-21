var typed = new Typed(".typing", {
    strings: [" Grow", " Learn", " Build"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});

var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
    $(function () {
        var i = 0;
        $("#section-1").css("background-image", "url(img/bg/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#section-1").fadeOut(2, function () {
                $(this).css("background-image", "url(img/bg/" + images[i] + ")");
                $(this).fadeIn(2);
            });
        }, 5000);
    });