import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <div className={styles.card}>
         <div className={styles.buttonContainer}>
            <button onClick={onClose}>X</button>
         </div>
         <Link to={`/details/${id}`} className={styles.link}>
            <div className={(status === "Alive") ? styles.imageContainerLive : styles.imageContainerDead}>
               <img className={styles.cardImage} src={image} alt={name} />
            </div>
            <div className={styles.wrapperText}>
               <div >
                  <p className={styles.name}>{name}</p>
               </div>
               <div className={styles.details}>
                  <div className={(status === "Alive") ? styles.textLive : ((status === "Dead") ? styles.textDead : styles.textUnknownDead)}>
                     <p><b> # </b> <br></br> {id} </p>
                  </div>
                  <p><b>Estado</b> <br></br>{status}</p>
                  <p> <b>Especie</b> <br></br>{species}</p>
                  {/* <b>Género: </b> {gender} <br></br>
                     <b>Origen:</b> {origin}</p> */}
               </div>
            </div>
         </Link>
      </div >

   );
}

