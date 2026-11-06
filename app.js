const sideBtn = document.getElementById("side-btn");
const links = document.querySelector(".links");

sideBtn.onclick=()=>{
    links.classList.toggle("show-links")
}