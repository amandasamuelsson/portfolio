window.addEventListener('load', main);
window.addEventListener('click', addEventListeners);
window.addEventListener('scroll', scrollFunction)



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

//Function that starts the slideshow 
function startSlideshowAnimation() {
    setInterval(changeActiveImage, 8000)
    changeActiveImage();
}

//Function that changes the image
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

//Function that makes the button visible when the user scrolled 20 px down 
const mybutton = document.getElementById("topBTN");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Function that gets the user back to the top of the page 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}