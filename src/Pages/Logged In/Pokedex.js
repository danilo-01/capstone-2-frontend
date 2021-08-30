import React, { useState } from "react";
import Pokecard from "../../Parts/Pokedex/Pokecard";
import { POKEMONAPI } from "../../API";
import "../../Styles/pokedex.css";
import "../../Styles/searchbar.css";
import SearchBar from "../../Parts/Searchbar";
import DetailedCard from "../../Parts/Pokedex/DetailedCard";
import FavoriteButton from "../../Parts/favoriteButton";


const Pokedex = () => {
    const [pokemon, setPokemon] = useState(null);
    const [singlePokemon, setSinglePokemon] = useState(null);

    const showMorePokemon = async () => {
        const offset = pokemon ? pokemon.length : 0;
        const result = await POKEMONAPI.getPokemon(10, offset);
        
        const newPokemonData = [];
        for(let pokemon of result.results){
            const singleResult = await getSinglePokemon(pokemon.url);
            newPokemonData.push(singleResult);
        }
        pokemon ? setPokemon([...pokemon, ...newPokemonData]) : setPokemon(newPokemonData);
    }
    const getSinglePokemon = async (url) => {
        const result = POKEMONAPI.getSinglePokemon(url);
        return result;
    }
    const searchFor = async (searchValue) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
        const result = await POKEMONAPI.getSinglePokemon(url);
        setSinglePokemon(result);
    }
    return (
        <div className="pokedex-page">
            
            <div className="searchbar">
            <h1>Pokemon Lookup</h1>
                <SearchBar placeHolder={"Search for a pokemon.."}searchFor={searchFor}/>
            </div>
            
            <div className="pokedex-single-pokemon">
            {
                singlePokemon ? <DetailedCard pokemon={singlePokemon}/> : null
            }
            {singlePokemon ? <FavoriteButton pokemon={singlePokemon}/> : null}
            </div>
            <button className="pokedex-button" onClick={showMorePokemon}>Load Pokemon</button>
            <div className="pokedex-pokemon">
                {
                    pokemon ? pokemon.map(pokemon => {
                        return <div>
                            <Pokecard pokemon={pokemon}/>
                            {<FavoriteButton pokemon={pokemon}/>}
                            </div>
                    }) : null
                }
                
            </div>
            
        </div>);
}

export default Pokedex;