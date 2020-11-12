window.addEventListener('load', main);
window.addEventListener('click', addEventListeners);
window.addEventListener('scroll', scrollFunction)


//  Adding image
const img = document.createElement("img");

img.src = "logo.png";
var src = document.getElementById("logo");

src.appendChild(img);


function main() {
    startSlideshowAnimation();
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

//Back to top button function

// When the user scrolls down 20px from the top of the document, show the button


const mybutton = document.getElementById("topBTN");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}