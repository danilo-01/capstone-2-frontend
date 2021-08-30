import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import formsContext from "../context/formsContext";
import currentUserContext from "../context/currentUserContext";

const NavBarLoggedIn = () => {

    const {logoutUser} = useContext(formsContext);
    const currentUser = useContext(currentUserContext);

    const handleLogout = () => {
        logoutUser();
    }
    return (
        <div className="navbar">

        {/* Pokedex */}
        <NavLink exact to="/pokedex">
            Pokedex
        </NavLink>
        {/* Favorites */}
        <NavLink exact to="/favorites">
            Favorites
        </NavLink>
        {/* Logout */}
        <NavLink exact onClick={handleLogout} to="/login">
            Logout {currentUser.username}
        </NavLink>
        </div>
    );
}

export default NavBarLoggedIn;