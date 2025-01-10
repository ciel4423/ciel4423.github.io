    let slideIndex = [1, 1];
    let slideId = ["slideshow1", "slideshow2", "slideshow3", "slideshow4", "slideshow5", "slideshow6", "slideshow7", "slideshow8", "slideshow9", "slideshow10"];
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
        let x = document.getElementById(slideId[no]).getElementsByClassName("slides");
        if (n > x.length) {slideIndex[no] = 1}
        if (n < 1) {slideIndex[no] = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex[no]-1].style.display = "block";
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