import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import PhotoRow from "../components/PhotoRow";
import "./PokemonDetail.css"
const PokemonDetail = () => {
    const {pokemonName} = useParams();
    const [picture1, setPicture1] = useState("");
    const [picture2, setPicture2] = useState("");
    const [picture3, setPicture3] = useState("");
    const [picture4, setPicture4] = useState("");
    const [picture5, setPicture5] = useState("");
    const [picture6, setPicture6] = useState("");
    const [picture7, setPicture7] = useState("");
    const [picture8, setPicture8] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [baseExperience, setBaseExperience] = useState(0);
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);
    let keynr = 0;
    let keynr2 = 0;
    async function fetchData() {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            setPicture1(result.data.sprites.front_default);
            setPicture2(result.data.sprites.back_default);
            setPicture3(result.data.sprites.front_shiny);
            setPicture4(result.data.sprites.back_shiny);

            setPicture5(result.data.sprites.front_female);
            setPicture6(result.data.sprites.back_female);
            setPicture7(result.data.sprites.front_shiny_female);
            setPicture8(result.data.sprites.back_shiny_female);

            setWeight(result.data.weight);
            setHeight(result.data.height);
            setBaseExperience(result.data.base_experience);
            setStats(result.data.stats);
            setAbilities(result.data.abilities); // array
            //   setStats(result.data.stats);    array
            //  number
            console.log(result.data);
            console.log(result.data.stats)


        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <>
            <h2>{pokemonName}</h2>
            {(picture1 || picture2 || picture3 || picture4) ?
                <PhotoRow pic1={picture1} pic2={picture2} pic3={picture3} pic4={picture4} text="Male"/>
                : ""}
            {(picture5 || picture6 || picture7 || picture8) ?
                <PhotoRow pic1={picture5} pic2={picture6} pic3={picture7} pic4={picture8} text="Female"/>
                : ""}
            <p>Basic experience: {baseExperience}</p>
            <p>Weight {weight}</p>
            <p>Height {height}</p>
            <p>Abilities</p>
            <ul>
            {abilities.map((item) => {
                keynr++;
                return<li key={keynr}>
                    {item.ability.name}
                </li> })}
            </ul>
            <p>Stats</p>
            <ul className="stats-item">
            {stats.map((item) => {
                keynr2++;
                return<li key={keynr2}>
                    <p>{item.stat.name}</p><p>{item.base_stat}</p>
                </li> })}
            </ul>
        </>
    );
};

export default PokemonDetail;