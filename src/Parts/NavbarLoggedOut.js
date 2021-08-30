import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const NavBarLoggedOut = () => {
    return (
        <div className="navbar">
         {/* Login */}
        <NavLink exact to="/login">
            Login
        </NavLink>
        {/* Sign up */}
        <NavLink exact to="/signup">
            Sign up
        </NavLink>
        </div>
    );
}

export default NavBarLoggedOut;