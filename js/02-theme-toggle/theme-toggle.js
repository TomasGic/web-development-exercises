const themeButton = document.querySelector("#theme-btn")
const clicksCountParagraph = document.querySelector("#click-counter")
const rootElement = document.documentElement
let clicksCount = 0

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
})

rootElement.addEventListener("click", () => {
    clicksCount += 1
    clicksCountParagraph.textContent = `Clicks: ${clicksCount}`
})


