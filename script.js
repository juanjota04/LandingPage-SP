const input = document.querySelector("input")
const body = document.querySelector("body")

const themeMode = () => {
    body.classList.toggle("dark")
}

input.onchange = themeMode;

const menuOpen = () => {
    document.body.classList.toggle("open")
}