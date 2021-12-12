import React, {useState, useEffect} from 'react';
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import "./Overview.css";

const Overview = () => {
    const [overviewUrl, setOverviewUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    const [next, setNext] = useState(null);
    const [previous, setPrevous] = useState(null);
    const [pokemons, setPokemons] = useState([]);
    const [amountPokemons, setAmountPokemons] = useState(20);
    let keynr = 0;

    async function fetchData() {
        try {
            const result = await axios.get(overviewUrl);
            /*console.log(result.data.next);
            console.log(result.data.previous);
            console.log(result.data.results);*/
            setNext(result.data.next);
            setPrevous(result.data.previous)
            setPokemons(result.data.results)


        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        keynr = 0;
        fetchData();

    }, [overviewUrl]);


    async function fetchCategories() {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/`);

            /* console.log(Object.keys(result.data));*/

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {

        fetchCategories();

    }, []);

    function handleClickNext() {
        setOverviewUrl(next);
    }

    function handleClickPrevious() {
        setOverviewUrl(previous);
    }

    useEffect(() => {
        const newUrl = `https://pokeapi.co/api/v2/pokemon?limit=${amountPokemons}&offset=0`
        setOverviewUrl(newUrl);
    }, [amountPokemons]);


    return (
        <>
            <div className="head">
                <ul className="next-previous">
                    <li>
                        <button type="button" onClick={handleClickPrevious}
                                disabled={!previous}>Vorige {amountPokemons}</button>
                    </li>
                    <li>
                        <button type="button" onClick={handleClickNext}
                                disabled={!next}>Volgende {amountPokemons}</button>
                    </li>
                </ul>
                <select name="amountPokemons" id="amountPokemons" onChange={(e) => setAmountPokemons(e.target.value)}>
                    <option value={10} selected={(amountPokemons === 10) ? true : false}>10</option>
                    <option value={20} selected={(amountPokemons === 20) ? true : false}>20</option>
                    <option value={30} selected={(amountPokemons === 30) ? true : false}>30</option>
                    <option value={50} selected={(amountPokemons === 50) ? true : false}>50</option>
                    <option value={75} selected={(amountPokemons === 75) ? true : false}>75</option>
                    <option value={100} selected={(amountPokemons === 100) ? true : false}>100</option>
                    <option value={200} selected={(amountPokemons === 200) ? true : false}>200</option>
                </select>
                <select name="pokemonSort" id="pokemonSort" onChange={(e) => setAmountPokemons(e.target.value)}>

                </select>
            </div>
            <div className="pokemon-overview">
                {pokemons.map((pokemon) => {
                    keynr++
                    return <PokemonCard key={keynr} pokemonName={pokemon.name}/>
                })}
            </div>
        </>
    );
};

export default Overview;