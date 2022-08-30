const changeImage = () => (image.src = "images/kaboom.gif");

const btn = document.querySelector(".footerbtn");
const image = document.querySelector(".my-img");
btn.addEventListener("click", changeImage);
