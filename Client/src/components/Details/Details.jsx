import React from "react";
import { useState, useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Details.module.css"


export default function Details(props) {
  const { DetailId } = useParams();
  const navigate = useNavigate();
  const { characters } = props;
  const ca = characters.filter((card) => card.id === +DetailId)

  // const [character, setCharacter] = useState;
//!no funciona con el axios
  // React.useEffect(() => {
  //   axios(`https://rickandmortyapi.com/api/character/${+DetailId}`)
  //     .then(({ data }) => {
  //       if (data.name) {
  //         setCharacter(data);
  //       } else {
  //         window.alert('No hay personajes con ese ID');
  //       }
  //     });
  //   return setCharacter({});
  // }, [DetailId]);
  const backToHome = ()=>{
    navigate("/home")
  }

  return (
    <div className={styles.container}>
      {/* <h1> {character.name} </h1>
      <p><b>Estado:</b> {character.status} <br></br>
        <b>Especie:</b> {character.species} <br></br>
        <b>Género: </b> {character.gender} <br></br>
        <b>Origen:</b> {character.origin?.name}</p>
      <div>
        <img src={character.image} alt={character.name} />
      </div> */}
      <div className={styles.buttonContainer}>
        <button onClick={backToHome}>X</button>
      </div>
      <div className={styles.detailCard}>
        <h1 className={styles.name}> {ca[0].name} </h1>
        <p><b>Estado:</b> {ca[0].status} <br></br>
          <b>Especie:</b> {ca[0].species} <br></br>
          <b>Género: </b> {ca[0].gender} <br></br>
          <b>Origen:</b> {ca[0].origin?.name}</p>
      </div>
      <div>
        <img src={ca[0].image} alt={ca[0].name} />
      </div>
    </div>
  );
}
// image
