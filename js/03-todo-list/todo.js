const taskInput = document.querySelector("#task-input")
const taskList = document.querySelector("#task-list")
const addButton = document.querySelector("#add-btn")


function addTask() {
    const task = taskInput.value.trim()

    if (task) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `
            <span class="task-text"></span>
            <button class="done-btn">Done</button>
            <button class="remove-btn">Remove</button>
        `

        listItem.querySelector(".task-text").textContent = task

        taskList.appendChild(listItem)
        taskInput.value = ""
    } else {
        return
    }
}

function completeTask(button) {
    const listItem = button.parentElement
    const taskText = listItem.querySelector(".task-text")
    taskText.classList.add("task-done")
}

addButton.addEventListener("click", addTask)
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { addTask() }
})

taskList.addEventListener("click", (event) => {
    const clickedElement = event.target

    if (clickedElement.classList.contains("done-btn")) {
        completeTask(clickedElement)
    }
})