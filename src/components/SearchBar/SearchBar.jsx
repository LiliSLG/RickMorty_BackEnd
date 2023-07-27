import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   return (
      <div className={styles.container}>
         <input className = {styles.imput} type='search' />
         <button className={styles.button} onClick={() => props.onSearch("Estoy recibiendo un ID")}>Agregar</button> 
      </div>
   );
}
