import React, { useContext, useState } from "react";
import formsContext from "../../context/formsContext";
import "../../Styles/login.css";
import "../../Styles/Navbar.css";

const Login = () => {
    const {loginUser} = useContext(formsContext);

    const INIT_FORM_DATA = {
        username : "",
        password : ""
    }
    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        const {username, password} = formData;
        loginUser(username, password)
    }

    return (
        <div>
            <form className="loggedout-form">
                {/* Username */}

                <input placeholder="username"onChange={handleChange} value={formData.username} name="username" type="text"/>

                {/* Password */}
                <input placeholder="password" onChange={handleChange} value={formData.password} name="password" type="password"/>

                <button onClick={handleClick} >Login</button>
            </form>
        </div>
    )

}

export default Login;