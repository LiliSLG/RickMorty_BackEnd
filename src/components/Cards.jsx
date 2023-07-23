import React from 'react';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map((eachCard) => {
            return (
               <Card
               key={eachCard.id}
               name={eachCard.name}
               species={eachCard.species}
               image={eachCard.image}
               onClose={() => window.alert('Emulamos que se cierra la tarjeta')}
               //onClose={eachCard.onClose}               
               />)
         })}
      </div>)
}


/*  
         return (
            <Card
               name={eachCard.name}
               species={eachCard.species}
               image={eachCard.image}
               onClose={eachCard.onClose}
            />)*/