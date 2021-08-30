import React, { useContext, useState, useEffect } from "react";
import currentUserContext from "../../context/currentUserContext";
import Pokecard from "../../Parts/Pokedex/Pokecard";
import FavoriteButton from "../../Parts/favoriteButton";
import { POKEMONAPI } from "../../API";
import "../../Styles/favorites.css";

const Favorites = () => {
    const currentUser = useContext(currentUserContext);

    const [pokemon, setPokemon] = useState(null);

    const showMorePokemon = async () => {
        const newPokemonData = [];
        for(let pokemon of currentUser.usersPokemon){
            const singleResult = await getSinglePokemon(`https://pokeapi.co/api/v2/pokemon/${pokemon.api_id}/`);
            newPokemonData.push(singleResult);
        }
        pokemon ? setPokemon([...pokemon, ...newPokemonData]) : setPokemon(newPokemonData);
    }
    const getSinglePokemon = async (url) => {
        const result = POKEMONAPI.getSinglePokemon(url);
        return result;
    }

    return (
        <div className="favorites-page">
            <div className="favorites-pokemon">
                {
                    pokemon ? pokemon.map(pokemon => {
                        return <div>
                            <Pokecard pokemon={pokemon}/>
                            {<FavoriteButton pokemon={pokemon}/>}
                            </div>
                    }) : null
                }
                {pokemon ? null : <button onClick={showMorePokemon}>Show</button>}
            </div>
            
        </div>);
}

export default Favorites;
