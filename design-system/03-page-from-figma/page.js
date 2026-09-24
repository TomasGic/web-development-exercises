const cards = document.querySelectorAll('.product-card')
const filterButtons = document.querySelectorAll('.filter-btn')
const mainMenu = document.querySelector('nav[aria-label="Main navigation"] ul')
const toggleMainMenuButton = document.querySelector('#menu-btn')
const header = document.querySelector('header')

function filterCardsByCategory(category) {
    cards.forEach(card => {
        const matches = category === 'all' || card.dataset.category === category
        card.classList.toggle('hidden', !matches)
    })
}

function styleActiveButton(activeBtn) {
    filterButtons.forEach(filterBtn => {
        const isActive = filterBtn === activeBtn

        filterBtn.classList.toggle('btn--primary', isActive)
        filterBtn.classList.toggle('btn--secondary', !isActive)
        filterBtn.setAttribute('aria-pressed', isActive);
    })
}

filterButtons.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        const selectedCategory = filterBtn.dataset.filter
        filterCardsByCategory(selectedCategory)
        styleActiveButton(filterBtn)
        
    })
})

toggleMainMenuButton.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('is-open')
    toggleMainMenuButton.classList.toggle('is-open')
    toggleMainMenuButton.setAttribute('aria-expanded', isOpen)
})

// Closing the main menu when a nav link is clicked
mainMenu.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    mainMenu.classList.remove('is-open')
    toggleMainMenuButton.classList.remove('is-open')
    toggleMainMenuButton.setAttribute('aria-expanded', 'false')
})

// In order to dynamically set the scroll-margin-top property(which should equal to the height of the header element) in the css file, we use ResizeObserver API to observe changes in the header element's size. If the header's height changes for example due to changes in header's padding, the observer triggers the callback function, relalculates the height of the header and the custom property --header-height will update automatically inside :root. 
const observer = new ResizeObserver((entries) => {
    entries.forEach(entry => {
        document.documentElement.style.setProperty(
            '--header-height',
            `${entry.borderBoxSize[0].blockSize}px`
        )
    })
})

observer.observe(header)
