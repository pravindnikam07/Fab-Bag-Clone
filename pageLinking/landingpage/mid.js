let slideIndex = 1;
topSlideShow(slideIndex);

function plusSlides(n) {
  topSlideShow(slideIndex += n);
}

function currentSlide(n) {
  topSlideShow(slideIndex = n);
}

function topSlideShow(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

