const header = document.querySelector("header");
let recentScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(recentScrollY < window.scrollY){
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }

    recentScrollY = window.scrollY
});