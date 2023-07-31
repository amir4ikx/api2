let doc = document
let loaderWrap = doc.querySelector(".loader-wrap")
window.onload = () => {
    loaderWrap.classList.add("non-active-loader")
    setTimeout(() => {
        loaderWrap.style.display = "none"
    }, 500);
}
console.log(loaderWrap);