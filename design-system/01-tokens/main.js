const rootStyles = getComputedStyle(document.documentElement);

const tokenCards = document.querySelectorAll('.token-card')
tokenCards.forEach(card => {
    const varName = card.dataset.token

    const varValue = rootStyles.getPropertyValue(varName)

    card.querySelector('.var-name').textContent = varName
    card.querySelector('.var-value').textContent = varValue
})