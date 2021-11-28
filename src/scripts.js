const closedPokeball = document.querySelectorAll('.closed')
const openedPokeball = document.querySelectorAll('.opened')
const chooseButton = document.querySelectorAll('.choose')
const initialContainer = document.querySelector('.initial')

closedPokeball.forEach(pokeball => {
  pokeball.addEventListener('click', () => pokeball.parentElement.parentElement.classList.toggle('active'))
})

openedPokeball.forEach(pokeball => {
  pokeball.addEventListener('click', () => pokeball.parentElement.parentElement.classList.toggle('active'))
})

chooseButton.forEach(button => {
  button.addEventListener('click', (event) => {
    const chosen = event.target.getAttribute('data-name')

    localStorage.setItem('chosen', chosen)
    window.location = `./evolutions/index.html`
  })
})

window.addEventListener('load', () => {
  const chosen = localStorage.getItem('chosen')

  if (chosen) localStorage.clear()
})
