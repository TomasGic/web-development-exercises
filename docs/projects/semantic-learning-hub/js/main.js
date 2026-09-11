const mainMenu = document.querySelector('nav[aria-label="Main navigation"] ul')
const toggleMainMenuButton = document.querySelector('#menu-btn')

toggleMainMenuButton.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('is-open')
    toggleMainMenuButton.classList.toggle('is-open')
    toggleMainMenuButton.setAttribute('aria-expanded', isOpen)
})