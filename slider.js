let slideIndex = [1, 1];
let slideId = ["slideshow1", "slideshow2", "slideshow3", "slideshow4", "slideshow5", "slideshow6", "slideshow7", "slideshow8", "slideshow9", "slideshow10"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    const slides = document.getElementById(slideId[no]).getElementsByClassName("slides");
    const pageContainer = document.getElementById(`page-container${no+1}`);
    if (n > slides.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex[no]-1].style.display = "block";

    // ページ番号の更新
    pageContainer.innerHTML = "";
    const pageNumber = document.createElement("span");
    pageNumber.classList.add("page-number");
    pageNumber.innerText = `${slideIndex[no]} / ${slides.length}`;
    pageContainer.appendChild(pageNumber);
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
