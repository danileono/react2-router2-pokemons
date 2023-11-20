import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

const Pokemones = () => {
    const [pokemonData, setPokemonData] = useState([]);

    const [id, setId] = useState("")

    const navigate = useNavigate();

    const verPokemon = ()=> {
        if(!id) return

    const path= `/pokemones/${id}`
    navigate(path)
}



    const getData = async () => {
        try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=50&limit=50");
        const json = await res.json();
        setPokemonData(json.results);
        } catch (error) {
        console.log("error");
        }
    };
    useEffect(() => {
        getData();
    }, []);


const handleSelect = (e)=> {
    setId(e.target.value);
    };

    return ( 
        <div className='pokemon-view'>
        <h3>Selecciona tu Pokemon</h3>


        <Form.Select className='select'  onChange={handleSelect} value={id} >
            <option>Selecciona un pokemon</option>
            {pokemonData &&
            pokemonData.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
            </option>
            ))}
        </Form.Select>
        <button onClick={()=> verPokemon()}>Buscar</button>

        </div>
    );
}

export default Pokemones