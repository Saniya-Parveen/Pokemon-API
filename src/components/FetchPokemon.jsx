import React, { useState } from 'react'
import './FetchPokemon.css'

export default function FetchPokemon() {
    const [pokemonId, setPokemonId] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

  const handleInputChange = (e) => {
    setPokemonId(e.target.value);
  };

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(`https://dummyapi.online/api/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };
  return (
    <div className="container">
    <h1 className="title">Pokemon Lookup</h1>
    <div className="input-container">
      <input
        className="input"
        type="number"
        placeholder="Enter Pokemon ID"
        value={pokemonId}
        onChange={handleInputChange}
      />
      <button className="button" onClick={fetchPokemonData}>Fetch Pokemon</button>
    </div>

    {pokemonData && (
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemonData.pokemon}</h2>
        <p className="pokemon-detail">Type: {pokemonData.type}</p>
        <p className="pokemon-detail">Abilities: {pokemonData.abilities.join(', ')}</p>
        <p className="pokemon-detail">Hit Points: {pokemonData.hitpoints}</p>
        <p className="pokemon-detail">Evolutions: {pokemonData.evolutions.join(', ')}</p>
        <p className="pokemon-detail">Location: {pokemonData.location}</p>
        <img className="pokemon-image" src={pokemonData.image_url} alt={pokemonData.pokemon} />
      </div>
    )}
  </div>
);
};