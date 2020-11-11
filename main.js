window.addEventListener('load', main);

//  Adding image
const img = document.createElement("img");

img.src = "logo.png";
var src = document.getElementById("logo");

src.appendChild(img);


function main() {
    startSlideshowAnimation();
    addEventListeners();
}
//Hamburger menu 
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('header-menu');

function addEventListeners() {
    navUL.classList.toggle('displaymenu');  

}

// Slideshow 
function startSlideshowAnimation() {
    setInterval(changeActiveImage, 10000)
    changeActiveImage();
}
function changeActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');

    for (let i = 0; i < images.length; i++) {

        if (images[i].classList.contains('show')) {
        images[i].classList.remove('show');

        let nextIndex = i + 1;

        if (nextIndex >=  images.length) {
            nextIndex = 0; 
        }

        images[nextIndex].classList.add('show');

        break;
        }
    }
}

