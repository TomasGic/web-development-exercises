const rootElement = document.documentElement
const themeButton = document.querySelector("#theme-btn")
const clicksCountParagraph = document.querySelector("#click-counter")
const resetButton = document.querySelector("#reset-counter-btn")
let clicksCount = 0

themeButton.addEventListener("click", () => {
   document.body.classList.toggle("dark-mode")
})

resetButton.addEventListener("click", () => {
    event.stopPropagation()

    clicksCount = 0
    clicksCountParagraph.textContent = "Clicks: 0"
})

rootElement.addEventListener("click", () => {
    clicksCount += 1
    clicksCountParagraph.textContent = `Clicks: ${clicksCount}`
})


