import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <Link to={`/details/${id}`} className={styles.link}>
         <div className={styles.card}>
            <div className={styles.buttonContainer}>
               <button onClick={onClose}>X</button>
            </div>
            <div className={(status === "Alive") ? styles.imageContainerLive : styles.imageContainerDead}>
               <img className={styles.cardImage} src={image} alt={name} />
            </div>
            <div className={styles.wrapperText}>
               <div className={styles.name}>
                  <h1 >{name}</h1>
               </div>
               <div className={styles.details}>
                  <p><b>Estado</b> <br></br>{status}</p>
                  <p> <b>Especie</b> <br></br>{species}</p>
                  {/* <b>Género: </b> {gender} <br></br>
                     <b>Origen:</b> {origin}</p> */}
               </div>
            </div>
         </div>
      </Link>
   );
}

