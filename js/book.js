document.addEventListener("DOMContentLoaded", function () {
  const imgGroup = document.querySelector(".sixgroup");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0; // Set the initial index to 0
  const totalGroups = document.querySelectorAll(".group1").length;
  const groupWidth = 231 * 2 + 30;
  let slideInterval;

  function updateSlider() {
    imgGroup.style.transform = `translateX(-${currentIndex * groupWidth}px)`;
  }

  function nextSlide() {
    if (currentIndex < totalGroups - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first set
    }
    updateSlider();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalGroups - 1; // Cycle to the last group
    }
    updateSlider();
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Calling updateSlider() as soon as the page loads ensures that the first group is displayed from the beginning.
  updateSlider();
  startAutoSlide();

  // Left and right arrow click events
  leftArrow.addEventListener("click", function () {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  rightArrow.addEventListener("click", function () {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  // Stop auto-rotation on mouse hover, continue after moving away
  imgGroup.addEventListener("mouseover", stopAutoSlide);
  imgGroup.addEventListener("mouseout", startAutoSlide);
});


// 获取按钮
const backToTopBtn = document.getElementById("backToTopBtn");

// 页面滚动时显示/隐藏按钮
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block"; // 滚动超过100px显示按钮
  } else {
    backToTopBtn.style.display = "none"; // 否则隐藏按钮
  }
}

// 获取按钮
const backToTopBtn = document.getElementById("backToTopBtn");

// 页面滚动时显示/隐藏按钮
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block"; // 滚动超过100px显示按钮
  } else {
    backToTopBtn.style.display = "none"; // 否则隐藏按钮
  }
}

// 点击按钮返回顶部
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE
}
