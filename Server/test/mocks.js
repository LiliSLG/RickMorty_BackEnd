const rickMock = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
       name: 'Earth (C-137)',
       url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
 }

 const mortyMock = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
       name: 'unknown',
       url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }

 module.exports = {
    rickMock,
    mortyMock,
 }