import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [character, setCharacter] = React.useState("");
   const handleInputChange = (event) => {
      // const {value} = event.target;
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.container}>
         <input className = {styles.imput} 
            id='id-input'
            type='search' 
            placeholder="Escriba un ID"
            onChange = {handleInputChange}/>
         <button className={styles.button} 
            onClick={() => props.onSearch(character)}>
               Agregar
         </button> 
      </div>
   );
}
