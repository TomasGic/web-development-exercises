const previewButton = document.querySelector('#preview-btn')
const variantSelect = document.querySelector('#variant-select')
const sizeSelect = document.querySelector('#size-select')
const disabledToggle = document.querySelector('#disabled-toggle')

function updateButtonPreview() {
    const variant = variantSelect.value 
    const size = sizeSelect.value

    const currentClasses = Array.from(previewButton.classList)

    currentClasses.forEach(cls => {
        if (cls.startsWith('btn--')) {
            previewButton.classList.remove(cls)
        }
    })

    if (variant) previewButton.classList.add(`btn--${variant}`)
    if (size) previewButton.classList.add(`btn--${size}`)
    
    if (disabledToggle.checked) {
        previewButton.setAttribute('disabled', '')
    }
    else {
        previewButton.removeAttribute('disabled')
    }

    console.log(`Button preview updated: variant=${variant}, size=${size}`)
}

const previewControls = [variantSelect, sizeSelect, disabledToggle]

previewControls.forEach(controlElement => {
    controlElement.addEventListener('change', (event) => {
        updateButtonPreview()
    })
})
