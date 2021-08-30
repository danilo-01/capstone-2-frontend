import react, { useState } from "react";
import typeToColor from "../../Helpers/typesToColor";
import "../../Styles/DetailedCard.css";

const DetailedCard = ({pokemon}) => {
    let typeColor = "";

    for(let type of pokemon.types){
        console.log("types", type)
        if(typeToColor[type.type.name]) {
            typeColor = type.type.name;
            break;
        }
    }
    const bgColor = typeColor ? typeToColor[typeColor] : "rgb(255,255,255)";
    pokemon.types.map(type => console.log(type.type.name))
    console.log(pokemon.types);
    return (
        <div style={
            {backgroundColor : bgColor}
        }
        className="detailed-card">
            <img style={
                {backgroundColor : bgColor}
            }   src={pokemon.sprites.front_default}/>
            <div className="details">
                <div className="name">
                    <h2>{pokemon.name}</h2>
                </div>
                <div className="base-experience">
                    <h5>Base Experience</h5>
                    <p>{pokemon.base_experience}</p>
                </div>
                <div className="types">
                    <h5>Type(s)</h5>
                    {
                        pokemon.types.map(type => <p>{type.type.name}</p>)
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailedCard;




    // TODO IMPLEMENT CHANGE POKEMON IMAGE
    // const checkUntilFound = (arr, idx, sprites) => {
    //     console.log("first",arr[idx]);
    //     if(arr[idx]) return arr[idx];

    //     if(idx == arr.length - 1){
    //         return checkUntilFound(arr, 0, sprites);
    //     }

    //     if(!sprites[arr[idx]]) return checkUntilFound(arr, idx +1, sprites);

    //     return "not working";
    // }
    // const nextSprite = () => {
    //     const spriteKeys = Object.keys(pokemon.sprites);

    //     let idx = 0;
    //     for(let i = 0; i < spriteKeys.length; i++){{
    //         console.debug("sprite", sprite);
    //         console.debug("Sprite Idx", spriteKeys[i]);
    //         if(spriteKeys[i] == sprite){
    //             idx = i;
    //             break;
    //         }
    //     }}
    //     spriteKeys.pop();
    //     spriteKeys.pop();
    //     setSprite(checkUntilFound(spriteKeys, idx + 1, pokemon.sprites));
    // }