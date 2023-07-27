import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>
         <div className='Presentacion'>
            <h1 className='Bienvenidos'> Bienvenidos</h1>
            <img className='LogoRickMorty' src='https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01-1536x726.png' alt='No encuentro la imagen' />
         </div>
         <div className='Nav'>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </div>
         <Cards characters={characters} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
