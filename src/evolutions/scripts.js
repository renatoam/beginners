const pokemonInfo = {
  bulbasaur: {
    number: '#001',
    name: 'bulbasaur',
    image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/001.png',
    type: 'grass',
    typeLabel: 'https://res.cloudinary.com/otaner/image/upload/v1637376215/pokemon/types/grass-label-circle.png',
    typeImage: 'https://res.cloudinary.com/otaner/image/upload/v1637376215/pokemon/types/grass-circle.png',
    next: {
      number: '#002',
      name: 'ivysaur',
      image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/002.png',
    },
    last: {
      number: '#003',
      name: 'venusaur',
      image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/003.png',
    }
  },
  charmander: {
    number: '#004',
    name: 'charmander',
    image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/004.png',
    type: 'fire',
    typeLabel: 'https://res.cloudinary.com/otaner/image/upload/v1637376224/pokemon/types/fire-label-circle.png',
    typeImage: 'https://res.cloudinary.com/otaner/image/upload/v1637376213/pokemon/types/fire-circle.png',
    next: {
      number: '#005',
      name: 'charmeleon',
      image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/005.png',
    },
    last: {
      number: '#006',
      name: 'charizard',
      image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/006.png',
    }
  },
  squirtle: {
    number: '#007',
    name: 'squirtle',
    image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/007.png',
    type: 'water',
    typeLabel: 'https://res.cloudinary.com/otaner/image/upload/v1637376215/pokemon/types/water-label-circle.png',
    typeImage: 'https://res.cloudinary.com/otaner/image/upload/v1637376215/pokemon/types/water-circle.png',
    next: {
      number: '#008',
      name: 'wartortle',
      image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/008.png',
    },
    last: {
      number: '#009',
      name: 'blastoise',
      image: 'https://res.cloudinary.com/otaner/image/upload/v1637365514/pokemon/artwork-sprites/009.png',
    }
  }
}


const body = document.querySelector('body')
const title = document.querySelector('.title')
const titlePokemon = document.querySelector('.title p')
const pokemonCards = document.querySelectorAll('.pokemon')
const numberPokemon = document.querySelector('.number')
const namePokemon = document.querySelector('.name')
const type = document.querySelector('.type img')
const image = document.querySelector('.image img')
const typeLabel = document.querySelector('.type-label img')

function addActionsToCard(pokemonName, pokemonCard) {
  const button = pokemonCard.querySelector('.catch')
  
  pokemonCard.classList.add(pokemonName)

  button.addEventListener('click', () => {
    const anyOtherMain = document.querySelector('.main')

    pokemonCard.classList.toggle('main')
    anyOtherMain.classList.remove('main')    
  })
}

function fillPokemonCard(pokemon, card) {
  const info = pokemonInfo[pokemon]

  if (card.classList.contains('next')) {
    document.querySelector('.next .name').innerHTML = info.next.name
    document.querySelector('.next .number').innerHTML = info.next.number
    document.querySelector('.next .type img').setAttribute('src', info.typeImage)
    document.querySelector('.next .image img').setAttribute('src', info.next.image)
    document.querySelector('.next .type-label img').setAttribute('src', info.typeLabel)
  }

  if (card.classList.contains('last')) {
    document.querySelector('.last .name').innerHTML = info.last.name
    document.querySelector('.last .number').innerHTML = info.last.number
    document.querySelector('.last .type img').setAttribute('src', info.typeImage)
    document.querySelector('.last .image img').setAttribute('src', info.last.image)
    document.querySelector('.last .type-label img').setAttribute('src', info.typeLabel)
  }

  namePokemon.innerHTML = info.name
  numberPokemon.innerHTML = info.number
  type.setAttribute('src', info.typeImage)
  image.setAttribute('src', info.image)
  typeLabel.setAttribute('src', info.typeLabel)
}

window.addEventListener('load', () => {
  const chosen = localStorage.getItem('chosen') ? localStorage.getItem('chosen') : 'bulbasaur'

  body.classList.add(chosen)
  title.classList.add(chosen)
  titlePokemon.innerHTML = chosen

  
  pokemonCards.forEach(card => {
    addActionsToCard(chosen, card)
    fillPokemonCard(chosen, card)
  })
})