import React, { useContext, useState } from "react";
import currentUserContext from "../context/currentUserContext";
import formsContext from "../context/formsContext";

const FavoriteButton = ({pokemon}) => {
    const currentUser = useContext(currentUserContext);
    const {favorite, favorites, setFavorites} = useContext(formsContext);
    let initState = false;

    for(let userPokemon of currentUser.usersPokemon){
        if(userPokemon.api_id == pokemon.id){
            initState = true;
        }
    }
    const [isFavorite, setIsFavorite] = useState(initState);

    const handleClick = (evt) => {
        const {name} = evt.target;
        if(name == "remove"){
            let change = true;
            if(favorites == true){
                change = false;
            }else{
                change = true;
            }
            setFavorites(change);
            favorite(currentUser.userId, pokemon.id, "remove");
            setIsFavorite(false);
        }else{
            let change = true;
            if(favorites == true){
                change = false;
            }else{
                change = true;
            }
            setFavorites(change);
            favorite(currentUser.userId, pokemon.id, "add");
            setIsFavorite(true);
        }
    }

    return (
        isFavorite 
        ? <button onClick={handleClick} name="remove" >Unlike</button> 
        : <button onClick={handleClick} name="add">Like</button>
    )
}

export default FavoriteButton;