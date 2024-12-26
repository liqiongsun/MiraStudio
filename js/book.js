document.addEventListener("DOMContentLoaded", function () {
  const imgGroup = document.querySelector(".sixgroup");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0; // 初始索引
  const groups = document.querySelectorAll(".group1"); // 获取所有组
  const totalGroups = groups.length; // 计算总组数
  const groupWidth = groups[0].offsetWidth + 30; // 组宽度（包括间距）
  let slideInterval;

  function updateSlider() {
    imgGroup.style.transform = `translateX(-${currentIndex * groupWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalGroups; // 循环到下一个
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalGroups) % totalGroups; // 循环到上一个
    updateSlider();
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // 每3秒切换一次
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // 初始化轮播
  updateSlider();
  startAutoSlide();

  // 左右箭头点击事件
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

  // 鼠标悬停时停止轮播，移开后继续
  imgGroup.addEventListener("mouseover", stopAutoSlide);
  imgGroup.addEventListener("mouseout", startAutoSlide);
});

// 返回顶部按钮逻辑
const backToTopBtn = document.getElementById("backToTopBtn");

// 页面滚动时显示/隐藏按钮
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// 点击按钮返回顶部
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE
}
