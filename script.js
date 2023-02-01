const inputs = document.querySelectorAll('.input')
const form = document.querySelector('.form')
const numberInputs = document.querySelectorAll('input[type=number]')
const cardNumberInput = document.querySelector('.input--number')

inputs.forEach(el => el.addEventListener('input', e => {
    const targetField = document.querySelector(`#${e.target.getAttribute('aria-controls')}`)
    if (e.target.value === '') {
        targetField.textContent = targetField.dataset.placeholder
    } else {
        targetField.textContent = e.target.value
    }
}))
inputs.forEach(el => el.addEventListener('invalid', (e) => {
    showError(e)
}))
numberInputs.forEach(el => el.addEventListener('input', e => {
    const { value } = e.target
    if (value.length > e.target.maxLength) {
        e.target.value = value.slice(0, e.target.maxLength)
    }
}))
cardNumberInput.addEventListener('keydown', e => {
    const isFourthCharacter = e.target.value.replace(/\s/g, '').length % 4 === 0 &&
        e.target.value.length > 0 &&
        e.key !== 'Backspace' &&
        e.key !== ' ' && e.target.value.length < 18
    if (isFourthCharacter) {
        e.target.value = e.target.value + ' '
    } else if (!containsOnlyNumbers(e.target.value)) {
        showError(e)
    } else {
        hideError(e)
    }
})
function containsOnlyNumbers(str) {
    return /^(\d+ )*(\d+)$/.test(str);
}
function showError(e) {
    e.target.style.borderColor = 'var(--clr-accent-400)'
    e.target.style.background = 'transparent'
    e.target.nextElementSibling.style.display = 'block'
    e.target.nextElementSibling.textContent = "Wrong format"
}
function hideError(e) {
    e.target.style.borderColor = 'transparent'
    e.target.style.background = 'linear-gradient(white, white) padding-box, var(--gradient) border-box'
    e.target.nextElementSibling.style.display = 'none'
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
})