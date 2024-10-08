let vk = document.querySelector("#vk")
let ofc = document.querySelector(".offcanvas-body")
let con = document.querySelector(".container")
let pho = document.querySelector("#photo-change")
let up = document.querySelector(".up")
pho.setAttribute("src", "assets/images/image-web-3-desktop.jpg")
if (con.offsetWidth <= 567) {
    ofc.style.left = "0"
    ofc.style.top = "30px"
    pho.setAttribute("src", "assets/images/image-web-3-mobile.jpg")

}
if (con.offsetWidth > 567) {
    up.style.display = "none"
}
function reloadPage() {
    location.reload()
}

window.addEventListener("resize", () => {
    reloadPage()
})
up.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

