function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//play video
const modalOverlayReactJS = document.getElementById("modalOverlayReactJS");
const btnPlayDemoReactJS = document.getElementById("btn-play-demo-reactJS");
const closeModalBtn = document.getElementById("closeModalReactJS");
const videoReactJS = document.getElementById("videoReactJS");

//Mở Modal bằng nút Live Demo
btnPlayDemoReactJS.addEventListener("click", () => {
  modalOverlayReactJS.style.display = "flex";
  videoReactJS.play(); //tự động phát video
});

//Đóng Modal
closeModalBtn.addEventListener("click", () => {
  modalOverlayReactJS.style.display = "none";
  videoReactJS.pause(); //tự động tắt video
});

//Đóng Modal khi click ra ngoài
window.addEventListener("click", (e) => {
  if (e.target === modalOverlayReactJS) {
    modalOverlayReactJS.style.display = "none";
    videoReactJS.pause(); //tự động tắt video
  }
});
