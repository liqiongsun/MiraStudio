// 当用户向下滚动20px时，显示“回到顶部”按钮
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block"; // 显示按钮
  } else {
    backToTopBtn.style.display = "none"; // 隐藏按钮
  }
}
//visual design 图片轮播
  const vGroup = document.querySelector('.v-group');

  // 暂停动画函数
  vGroup.addEventListener('mouseover', () => {
    vGroup.style.animationPlayState = 'paused';
  });

  // 恢复动画函数
  vGroup.addEventListener('mouseout', () => {
    vGroup.style.animationPlayState = 'running';
  });

//视频播放控制

const video = document.getElementById('myVideo');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function muteUnmute() {
  video.muted = !video.muted;
}
// 点击按钮时，页面回到顶部
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

// 监听 english-work 菜单点击事件，控制下拉菜单显示/隐藏
document
  .getElementById("english-work")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 阻止默认链接跳转
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show"); // 切换 class 来显示或隐藏菜单
  });

// 图片轮播滑动效果
document.addEventListener("DOMContentLoaded", function () {
  const imgGroup = document.querySelector(".img-group");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0;
  const totalGroups = 2; // 假设有两个组图片

  function updateSlider() {
    imgGroup.style.transform = `translateX(-${currentIndex * 50}%)`; // 根据索引值移动
  }

  leftArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  rightArrow.addEventListener("click", function () {
    if (currentIndex < totalGroups - 1) {
      currentIndex++;
      updateSlider();
    }
  });
});

// 图片点击切换效果
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".images img");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0;
  const totalImages = images.length;

  function updateActiveImage(index) {
    images.forEach((img) => img.classList.remove("active"));
    images[index].classList.add("active");
  }

  updateActiveImage(currentIndex);

  leftArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateActiveImage(currentIndex);
    }
  });

  rightArrow.addEventListener("click", function () {
    if (currentIndex < totalImages - 1) {
      currentIndex++;
      updateActiveImage(currentIndex);
    }
  });

  images.forEach((img, index) => {
    img.addEventListener("click", function () {
      currentIndex = index;
      updateActiveImage(currentIndex);
    });
  });
});

// 汽车空调温度调节功能
let leftTemperature = 22; // 左侧初始温度
let rightTemperature = 22; // 右侧初始温度

// 更新左侧温度显示
function updateLeftTemperatureDisplay() {
  const leftDisplay = document.getElementById("temperatureDisplay");
  leftDisplay.textContent = `${leftTemperature}°C`;
}

// 更新右侧温度显示
function updateRightTemperatureDisplay() {
  const rightDisplay = document.getElementById("rightTemperatureDisplay");
  rightDisplay.textContent = `${rightTemperature}°C`;
}

// 增加左侧温度
function increaseLeftTemperature() {
  if (leftTemperature < 30) {
    leftTemperature++;
    updateLeftTemperatureDisplay();
  }
}

// 减少左侧温度
function decreaseLeftTemperature() {
  if (leftTemperature > 16) {
    leftTemperature--;
    updateLeftTemperatureDisplay();
  }
}

// 增加右侧温度
function increaseRightTemperature() {
  if (rightTemperature < 30) {
    rightTemperature++;
    updateRightTemperatureDisplay();
  }
}

// 减少右侧温度
function decreaseRightTemperature() {
  if (rightTemperature > 16) {
    rightTemperature--;
    updateRightTemperatureDisplay();
  }
}

//language 
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const leftArrow = document.querySelector('.carousel-arrow-left');
  const rightArrow = document.querySelector('.carousel-arrow-right');

  let currentIndex = 0;
  const totalItems = items.length;
  const itemWidth = 630; // 图片宽度
  const autoSlideInterval = 3000; // 自动轮播间隔时间（毫秒）
  let autoSlideTimer;

  // 更新轮播位置
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  // 自动轮播启动函数
  function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems; // 循环切换到下一张
      updateCarousel();
    }, autoSlideInterval);
  }

  // 停止自动轮播
  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
  }

  // 左箭头点击事件
  leftArrow.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // 切换到上一张
    updateCarousel();
    startAutoSlide(); // 重启自动轮播
  });

  // 右箭头点击事件
  rightArrow.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex + 1) % totalItems; // 切换到下一张
    updateCarousel();
    startAutoSlide(); // 重启自动轮播
  });

  // 鼠标悬停时停止自动轮播
  track.addEventListener('mouseover', stopAutoSlide);

  // 鼠标移出时重新启动自动轮播
  track.addEventListener('mouseout', startAutoSlide);

  // 初始化
  updateCarousel();
  startAutoSlide();
});
