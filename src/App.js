import React, { useEffect, useState } from 'react';
import Button from './componentes/Button';
import ItemList from './componentes/ItemList';
import PokemonDetails from './componentes/PokemonDetails';
import './App.css';
import axios from 'axios';



const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [listPokemons, setListPokemons] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() =>{
   
    axios.get(`${process.env.REACT_APP_POKEAPI}pokemon`)
    .then((resp) => {
      const{ data } = resp;

      setListPokemons(data);
    }).catch(() => {
     setError(true);
  }).finally(() => {
     setIsLoading(false);
   });
  }, []);

  const getListPokemon = (url) => {
  setIsLoading(true);

  axios.get(url)
  .then((resp) => {
    const {data} = resp;

    setListPokemons(data);
      }).catch(() => {
        setError(true);
      }).finally(() => {
        setIsLoading(false);
      });
  }

  const getPokemon = (url) => {
    axios.get(url)
      .then((resp) => {
        const { data } = resp;

        setPokemon(data);
      }).catch(() => {      
      }).finally(() => {
      });
  }

  if (isLoading) {
    return (
      <div className="Loading">
        Caregando.
      </div>
    )
  }

  if (isError) {
    return (
      <div className="Error">
        Erro
      </div>
    )
  }



  const {results, next, previous} = listPokemons;

  return (
  <>
    <div className="App">
      {results.map((result, key) => <ItemList key={key} onClick={() => getPokemon(result.url)}>{result.name}</ItemList>)}
      <div className="App-pagination">
        <Button onClick={() => getListPokemons(previous)} disabled={!previous}>Anterior</Button>
        <Button onClick={() => getListPokemons(next)} disabled={!next}>Próximo</Button>
      </div>
    </div>

    {pokemon && <PokemonDetails dataPokemon={pokemon} onClose={() => setPokemon(null)}/>}
  </>
  );
}

export default Home