const greetButton = document.querySelector("#greet-btn")
const clearButton = document.querySelector("#clear-btn")
const greetingOutput = document.querySelector("#greeting-output")
const inputField = document.querySelector("#name")


function greet() {
    const name = inputField.value.trim()
    const greetingText = `Hello, ${name}. Welcome!` 
    
    if (name) {
        greetingOutput.textContent = greetingText
        inputField.value = ""
        clearButton.style.display = "inline"
    } else {
        return
    }
}

function clear() {
    greetingOutput.textContent = ""
    clearButton.style.display = "none"
}

greetButton.addEventListener("click", greet)
clearButton.addEventListener("click", clear)
inputField.addEventListener("keydown", (event) =>{
    if (event.key === "Enter") { greet() }
})
