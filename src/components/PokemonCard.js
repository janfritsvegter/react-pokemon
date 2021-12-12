import React, {useState, useEffect} from 'react';
import axios from "axios";
import './PokemonCard.css';
import {Link} from "react-router-dom";

/*
Wat moet er op een pokemonKaartje
[x] Naam
[x] Foto
[x] Moves
[x] Weight
[x] Height
[x] Abilities
 */
const PokemonCard = ({pokemonName}) => {
    const [pokemonPicture, setPokemonPicture] = useState("");
    const [pokemonWeight, setPokemonWeight] = useState("");
    const [pokemonHeight, setPokemonHeight] = useState("");
    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    let keynr = 0;

    async function fetchData() {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            setPokemonPicture(result.data.sprites.front_default);
            setPokemonWeight(result.data.weight);
            setPokemonHeight(result.data.height);
            setPokemonAbilities(result.data.abilities);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        keynr = 0;
        fetchData();

    }, [pokemonName]);

    const link = `/pokemon-detail/${pokemonName}`
    return (
        <Link to={link}>
        <div className="pokemon-card">
            <p>{pokemonName}</p>
            <img src={pokemonPicture} alt={pokemonName}/>
            <p>Weight {pokemonWeight}</p>
            <p>Height {pokemonHeight}</p>
            {pokemonAbilities.map((item) => {
                keynr++;
                return<p key={keynr}>
                    {item.ability.name}
                </p> })}


        </div>
        </Link>
    );
};

export default PokemonCard;