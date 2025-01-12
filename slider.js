// スライドショーIDのリストと各スライドショーのインデックスを初期化
let slideId = ["slideshow1", "slideshow2", "slideshow3", "slideshow4", "slideshow5", "slideshow6", "slideshow7", "slideshow8", "slideshow9", "slideshow10"];
let slideIndex = Array(slideId.length).fill(1);

// 初期表示
slideId.forEach((id, index) => showSlides(1, index));

// 前後のスライドを表示する関数
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

// 現在のスライドを指定する関数
function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

// スライドを表示する関数
function showSlides(n, no) {
    let i;
    const slides = document.getElementById(slideId[no]).getElementsByClassName("slides");
    const pageContainer = document.getElementById(`page-container${no + 1}`);
    if (n > slides.length) { slideIndex[no] = 1; }
    if (n < 1) { slideIndex[no] = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex[no] - 1].style.display = "block";

    // ページ番号の更新
    pageContainer.innerHTML = "";
    const pageNumber = document.createElement("span");
    pageNumber.classList.add("page-number");
    pageNumber.innerText = `${slideIndex[no]} / ${slides.length}`;
    pageContainer.appendChild(pageNumber);
}
