import React , {useState , useEffect}from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from "axios";
import Overview from "./pages/Overview";
import PokemonDetail from "./pages/PokemonDetail";
import './App.css';
/*
[] Navigation
[x] Routing
    [x] Overview /
    [x] Detail /pokemon-detail/:pokemonName
Pages
[] Overvieuw
[] PokemonDetail
 */


function App() {


  return (
    <div>

        <Switch>
            <Route exact path="/">
                <Overview />
            </Route>
            <Route path="/pokemon-detail/:pokemonName">
                <PokemonDetail />
            </Route>
        </Switch>

    </div>
  );
};

export default App;
