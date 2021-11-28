const pokemons = document.querySelectorAll('.pokemon')

pokemons.forEach(pokemon => {
  const button = pokemon.querySelector('.catch')

  button.addEventListener('click', (event) => {
    const anyOtherMain = document.querySelector('.main')

    pokemon.classList.toggle('main')
    anyOtherMain.classList.remove('main')    
  })
})