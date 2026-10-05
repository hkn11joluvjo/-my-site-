document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const prevButton = document.getElementById("heroPrev");
  const nextButton = document.getElementById("heroNext");

  let currentSlide = 0;
  let timer;

  // スライド表示
  function showSlide(index) {

    // 最後まで行ったら最初に戻る
    if (index >= slides.length) {
      index = 0;
    }

    // 最初より前なら最後へ
    if (index < 0) {
      index = slides.length - 1;
    }

    currentSlide = index;

    // すべて非表示
    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });

    // すべてのドットをOFF
    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });

    // 現在のスライドを表示
    slides[currentSlide].classList.add("active");

    // 現在のドットをON
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add("active");
    }
  }


  // 次のスライド
  function nextSlide() {
    showSlide(currentSlide + 1);
  }


  // 前のスライド
  function prevSlide() {
    showSlide(currentSlide - 1);
  }


  // 自動スライド
  function startAutoSlide() {

    clearInterval(timer);

    timer = setInterval(function () {
      nextSlide();
    }, 5000); // 5秒ごと
  }


  // 次へボタン
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      nextSlide();
      startAutoSlide();
    });
  }


  // 前へボタン
  if (prevButton) {
    prevButton.addEventListener("click", function () {
      prevSlide();
      startAutoSlide();
    });
  }


  // ドット
  dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {
      showSlide(index);
      startAutoSlide();
    });

  });


  // 最初のスライドを表示
  showSlide(0);

  // 自動スライド開始
  startAutoSlide();

});




/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");

const mobileMenu = document.getElementById("mobileMenu");

const menuOverlay = document.getElementById("menuOverlay");

const menuClose = document.getElementById("menuClose");


/* メニューを開く */

function openMenu() {

  mobileMenu.classList.add("active");

  menuOverlay.classList.add("active");

  // 背景ページをスクロールさせない
  document.body.style.overflow = "hidden";

}


/* メニューを閉じる */

function closeMenu() {

  mobileMenu.classList.remove("active");

  menuOverlay.classList.remove("active");

  // スクロールを元に戻す
  document.body.style.overflow = "";

}


/* ☰を押す */

menuButton.addEventListener("click", function () {

  openMenu();

});


/* ×を押す */

menuClose.addEventListener("click", function () {

  closeMenu();

});


/* 暗い背景を押す */

menuOverlay.addEventListener("click", function () {

  closeMenu();

});


/* ESCキーでも閉じる */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    closeMenu();

  }

});
