const previewButton = document.querySelector('#preview-btn')
const variantSelect = document.querySelector('#variant-select')
const sizeSelect = document.querySelector('#size-select')
const disabledToggle = document.querySelector('#disabled-toggle')

function updateButtonPreview() {
    const variant = variantSelect.value 
    const size = sizeSelect.value

    previewButton.className = (`btn btn--${variant} btn--${size}`)
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
