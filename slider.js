let slideIndex = [1, 1];
let slideId = ["slideshow1", "slideshow2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    const slides = document.getElementById(slideId[no]).getElementsByClassName("slides");
    const dots = document.querySelectorAll(`#${slideId[no]} ~ .button-container .dot`);
    if (n > slides.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[no]-1].style.display = "block";  
    dots[slideIndex[no]-1].className += " active";
}

function addTouchEvent(container, slideIndex, slideId) {
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    }, false);

    container.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleGesture(slideIndex, slideId);
    }, false);

    function handleGesture(slideIndex, slideId) {
        if (touchEndX < touchStartX) {
            plusSlides(1, slideIndex); // 次のスライドへ
        }
        if (touchEndX > touchStartX) {
            plusSlides(-1, slideIndex); // 前のスライドへ
        }
    }
}

// コンテナごとにタッチイベントを追加
const containers = document.querySelectorAll('.slideshow-container');
containers.forEach((container, index) => {
    addTouchEvent(container, index, slideId[index]);
});
