// Bật/tắt menu trên điện thoại
var btn = document.getElementById("menuBtn");
var nav = document.getElementById("mainNav");

btn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Bấm vào một mục menu thì tự đóng menu
nav.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
  }
});
