import Login from "./Login";
import Signup from "./Signup";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import NavBarLoggedOut from "../../Parts/NavbarLoggedOut";
import "../../Styles/form.css";

const LoggedOut = () => {
    return (
        <BrowserRouter>
        <NavBarLoggedOut/>
        {/* Login path */}
            <Route exact path="/login">
                <Login/>
            </Route>
    
        {/* Signup path */}
            <Route exact path="/signup">
                <Signup/>
            </Route>

            <Redirect to="/login"/>
        </BrowserRouter>
    )
}

export default LoggedOut;