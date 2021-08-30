import React, { useState } from "react";

const SearchBar = ({searchFor, placeHolder}) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (evt) => {
        const {value} = evt.target;
        setSearchValue(value);
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        if(searchValue) searchFor(searchValue);
        
    }
    return (
        <form>
            <input placeHolder={placeHolder} onChange={handleChange} value={searchValue} name="search"type="text"/>
            <button onClick={handleClick}>Search</button>
        </form>
    )
}

export default SearchBar;