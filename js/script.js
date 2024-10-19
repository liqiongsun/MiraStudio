// 当用户向下滚动20px时，显示按钮
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

// 当用户点击按钮时，页面回到顶部
function topFunction() {
  document.body.scrollTop = 0; // 对于Safari
  document.documentElement.scrollTop = 0; // 对于Chrome, Firefox, IE和Opera
}
