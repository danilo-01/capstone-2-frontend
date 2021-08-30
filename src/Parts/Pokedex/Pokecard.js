import React from "react";
import "../../Styles/pokecard.css";
import typeToColor from "../../Helpers/typesToColor";

const Pokecard = ({pokemon}) => {
    // set pokecard color
    let typeColor = "";

    for(let type of pokemon.types){

        if(typeToColor[type.type.name]) {
            typeColor = type.type.name;
            break;
        }
    }
    const bgColor = typeColor ? typeToColor[typeColor] : "rgb(255,255,255)";

 
    return (
        <div style={{
            backgroundColor: bgColor
            }} className="pokecard">
            <h4 className="pokecard-name">{pokemon.name}</h4>
            <img src={pokemon.sprites.front_default}/>
            
        </div>
    );
}

export default Pokecard;