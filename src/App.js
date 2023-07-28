import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      if (isNaN(id)||id==="") {
         window.alert('¡Ingrese un ID válido!')         
      } else {         
         if (characters.filter((char) => char.id === +id).length > 0) {
            window.alert('¡Ya existe un personaje con este ID!')
         }
         else {
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
               .then((res) => res.json())
               .then((data) => {
                  setCharacters((characters) => [...characters, data])
               })
               //setCharacters(...characters, data]) ES LO MISMO
               .catch((error) => window.alert('¡No hay personajes con este ID!'))
         }
      }
      // !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      const inputDOM =document.getElementById('id-input');
      inputDOM.value='';
      // !NO DEBERIA MANIPULAR EL DOM, HACERLO CON LOS ESTADOS
   }

   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id !== id)
      setCharacters(filtered)
   }

   return (
      <div className='App'>
         <div className='Presentacion'>
            <h1 className='Bienvenidos'> Bienvenidos</h1>
            <img className='LogoRickMorty' src='https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01-1536x726.png' alt='No encuentro la imagen' />
         </div>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
