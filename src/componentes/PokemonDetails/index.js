import React from 'react';

import Button from '../Button';

import './style.css';

const PokemonDetails = ({ dataPokemon, onClose }) => {
const {name, base_experience, height, weight, sprites: { front_default }} = dataPokemon;

  return (
    <div className="Pokemon-wrapper">
        <div className="Pokemon-container">
            <h2>{name}</h2>
            <img src={front_default} alt={name} title={name} />
            <p>Experiência: {base_experience}</p>
            <p>Altura: {height / 10}m</p>
            <p>Peso: {weight / 10}kg</p>

            <Button onClick={onClose}>Fechar</Button>
        </div>
    </div>
  );

  {;}

}

export default PokemonDetails;
