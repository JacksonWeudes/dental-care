const menuBtn = document.getElementById("menu-icon")
const sideMenu = document.getElementById("side-menu")
const overlay = document.getElementById("overlay")

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open")
    menuBtn.classList.toggle("open")
    overlay.classList.toggle("open")
    document.body.classList.toggle("open")
})