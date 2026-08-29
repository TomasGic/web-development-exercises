const cards = document.querySelectorAll('.product-card')
const filterButtons = document.querySelectorAll('.filter-btn')
const mainMenu = document.querySelector('nav[aria-label="Main navigation"] ul')
console.log(mainMenu)
const toggleMainMenuButton = document.querySelector('#menu-btn')

function hideAllCards() {
    cards.forEach(card => {
        card.classList.add('hidden')
    })
}

function showAllCards() {
    cards.forEach(card => {
        card.classList.remove('hidden')
    })
}

function filterCardsByCategory(category) {
    if (category === 'all') {
        showAllCards()
    } else {
        hideAllCards()
        cards.forEach(card => {
            const cardCategory = card.dataset.category
            if (category === cardCategory) {
                card.classList.remove('hidden')
            }
        })
    }
    
}

function styleActiveButton(button) {
    filterButtons.forEach(button => {
        button.classList.remove('btn--primary')
        button.classList.add('btn--secondary')
    })
    button.classList.add('btn--primary')
    button.classList.remove('btn--secondary')
}

filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const clickedButton = event.target
        const selectedCategory = button.dataset.filter
        filterCardsByCategory(selectedCategory)
        styleActiveButton(clickedButton)
        
    })
})

toggleMainMenuButton.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('is-open')
    toggleMainMenuButton.classList.toggle('is-open')
    toggleMainMenuButton.setAttribute('aria-expanded', isOpen)
})

