window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let rotateDegree = scrollY % 1660; // Keep rotation in range 0-360
    document.getElementById("rotatingImage").style.transform = `rotate(${rotateDegree}deg)`;
});