const cards = document.querySelectorAll('.product-card')
const filterButtons = document.querySelectorAll('.filter-btn')
const mainMenu = document.querySelector('nav[aria-label="Main navigation"] ul')
const toggleMainMenuButton = document.querySelector('#menu-btn')

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

