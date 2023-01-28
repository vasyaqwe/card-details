const inputs = document.querySelectorAll('.input')

inputs.forEach(el => el.addEventListener('input', e => {
    const targetField = document.querySelector(`#${e.target.getAttribute('aria-controls')}`)
    if (e.target.value === '') {
        targetField.textContent = targetField.dataset.placeholder
    } else {
        targetField.textContent = e.target.value
    }
}))