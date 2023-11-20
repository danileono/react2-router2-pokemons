import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function PokemonCard() {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();
  const { types, stats } = pokemon || {};

  const getPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const json = await res.json();
      setPokemon(json);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

  if ((!pokemon)) {
    return (
      <div> cargando
      </div>
    );
  }
  return (
    <div className="card-container">
      <Card>
        <Card.Img  variant="top" src={pokemon.sprites.front_default} />
        <Card.Body >
          <h1 >{pokemon.name}</h1>
          <h2>Tipo:</h2>
          
        </Card.Body>
      </Card>
    </div>
  );

}

export default PokemonCard;