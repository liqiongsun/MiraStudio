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
