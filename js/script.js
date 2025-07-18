const menuBtn = document.getElementById("menu-icon")
const sideMenu = document.getElementById("side-menu")
const overlay = document.getElementById("overlay")

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open")
    menuBtn.classList.toggle("open")
    overlay.classList.toggle("open")
    document.body.classList.toggle("open")
})

const body = document.body
let lastScroll = 0

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if(currentScroll <= 0){
        body.classList.remove("scroll-up")
    }

    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll
})