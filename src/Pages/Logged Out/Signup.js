import React, { useContext, useState } from "react";
import formsContext from "../../context/formsContext";
import "../../Styles/form.css";

const Signup = ({}) => {
    const INIT_FORM_DATA = {
        username : "",
        email : "",
        firstName : "",
        password : ""
    }
    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const {signupUser} = useContext(formsContext);

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        const {username, password, firstName, email} = formData;
        localStorage.setItem("currentUser", JSON.stringify({username}));
        signupUser(username, password, firstName, email);
    }

    return (
        <div>
            <form className="loggedout-form">
                {/* Username */}
                <input placeholder="username" onChange={handleChange} value={formData.username} name="username" type="text"/>

                {/* Password */}
                <input placeholder="password" onChange={handleChange} value={formData.password} name="password" type="password"/>

                {/* E-mail */}
                <input placeholder="e-mail" onChange={handleChange} value={formData.email} name="email" type="text"/>

                {/* First Name */}
                <input placeholder="first name" onChange={handleChange} value={formData.firstName} name="firstName" type="text"/>

                {/* Submit */}
                <button onClick={handleClick}>Sign Up</button>
            </form>
        </div>
    )

}

export default Signup;