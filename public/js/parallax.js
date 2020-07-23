// navbar
const menuBtn = document.querySelector(".navbarContent__nav__menu-icon span");
const searchBtn = document.querySelector(".navbarContent__nav__search-icon");
const cancelBtn = document.querySelector(".navbarContent__nav__cancel-icon");
const items = document.querySelector(".navbarContent__nav__items");
const form = document.querySelector("navbarContent__nav__form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}












// 

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




// 


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }