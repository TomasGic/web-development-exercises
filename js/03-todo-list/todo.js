const taskInput = document.querySelector("#task-input")
const taskList = document.querySelector("#task-list")
const addButton = document.querySelector("#add-btn")
const clearCompletedButton = document.querySelector("#clear-completed-btn")

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
    updateclearCompletedButton()
}

function removeTask(button) {
    const listItem = button.parentElement
    listItem.remove()
    updateclearCompletedButton()
}

function clearCompleted() {
    // we select all the span elements that have the class .task-done applied, 
    // then we find their parent element (list item) and remove it from the DOM
    const completedTasks = document.querySelectorAll(".task-text.task-done")
    completedTasks.forEach(taskText => {
        const listItem = taskText.parentElement
        listItem.remove()
    })
    updateclearCompletedButton() 
}

function updateclearCompletedButton() {
    const completedTasks = document.querySelectorAll(".task-text.task-done")

    // if there are completed tasks in the list we want to display the 'clear completed' button, otherwise we want to keep it hidden'
    if (completedTasks.length > 0) {
        clearCompletedButton.classList.remove("hidden")
    } else {
        clearCompletedButton.classList.add("hidden")
    }
}

addButton.addEventListener("click", addTask)
clearCompletedButton.addEventListener("click", clearCompleted)
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { addTask() }
})

taskList.addEventListener("click", (event) => {
    const clickedElement = event.target

    if (clickedElement.classList.contains("done-btn")) {
        completeTask(clickedElement)
    }

    if (clickedElement.classList.contains("remove-btn")) {
        removeTask(clickedElement)
    }
})

