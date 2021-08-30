import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Pokedex from "./Pokedex";
import NavbarLoggedIn from "../../Parts/NavbarLoggedIn";
import Favorites from "./Favorites";
import React from "react";

const LoggedIn = () => {
    return (
        <BrowserRouter>
        <NavbarLoggedIn/>

            <Route exact path="/pokedex">
                <Pokedex/>
            </Route>
            <Route exact path="/favorites">
                <Favorites/>
            </Route>
            <Redirect to="/pokedex"/>
        </BrowserRouter>
    )
}

export default LoggedIn;