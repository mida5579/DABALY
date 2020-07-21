var ypos = 0;
var positionScroll;
var vitesse = 0.1; //Changer la valeur par la vitesse de défilement souhaitée

window.onload = function () {
    document.onscroll = function() {
    positionScroll = window.pageYOffset;
    ypos = positionScroll *= -vitesse;
    document.querySelector("#parallax").style.backgroundPosition="0px " + ypos + "px"; 
    }
}