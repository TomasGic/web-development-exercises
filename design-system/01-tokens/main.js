const rootStyles = getComputedStyle(document.documentElement);

const tokenCards = document.querySelectorAll('.token-card')
tokenCards.forEach(card => {
    const varName = card.dataset.token

    const varValue = rootStyles.getPropertyValue(varName)

    card.querySelector('.var-name').textContent = varName
    card.querySelector('.var-value').textContent = varValue

    const colorSwatch = card.querySelector('.color-swatch')
    if (colorSwatch) colorSwatch.style.backgroundColor = `var(${varName})`

    const spaceBar = card.querySelector('.spacing-bar')
    if (spaceBar) spaceBar.style.width = `var(${varName})`

    const fontSample = card.querySelector('.font-sample')
    if (fontSample) fontSample.style.fontSize = `var(${varName})`

})