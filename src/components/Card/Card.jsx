import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
   const {name, status, species, gender, origin, image, onClose} = props;
   return (
      <div className={styles.card}>
         <div className={styles.buttonContainer}>
            <button onClick={onClose}>X</button>
         </div>
            <div className={styles.imageContainer}>
               <img src={image} alt={name} />
            </div>
         <div className={styles.wrapperText}>
            <h1 className={styles.name}>{name}</h1>
            <div className={styles.details}>
               <p><b>Estado:</b> {status} <br></br>
               <b>Especie:</b> {species} <br></br>
               <b>Género: </b> {gender} <br></br>
               <b>Origen:</b> {origin}</p>
            </div>
         </div>         
      </div>
   );
 }

