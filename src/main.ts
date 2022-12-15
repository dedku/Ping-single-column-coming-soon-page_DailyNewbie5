export const input = document.querySelector('.form-input') as HTMLInputElement
export const button = document.querySelector('.cta') as HTMLButtonElement
const error = document.querySelector('.error-massage') as HTMLDivElement

button.addEventListener('click', (e) => {
  e.preventDefault();
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const inputValue = input.value.length > 0
  const verifieEmail = input.value.match(regex)
  if (!inputValue) {
    error.innerHTML = `Email field is empty`
    input.style.border = `1px solid hsl(354, 100%, 66%);`
  }
  if (inputValue && !verifieEmail) {
    error.innerHTML = `Please provide a valid email address`
    input.style.border = `1px solid hsl(354, 100%, 66%);`
  }
  if (verifieEmail) {
    error.innerHTML = ``
    input.style.border = `1px solid var(--primary-blue);`
  }
})
