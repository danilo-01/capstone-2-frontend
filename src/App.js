import { useEffect, useState } from "react";
import { PCAPI } from "./API";
import formsContext from "./context/formsContext";
import currentUserContext from "./context/currentUserContext";
import LoggedIn from "./Pages/Logged In/LoggedIn"
import LoggedOut from "./Pages/Logged Out/LoggedOut"
import "./Styles/App.css";

function App() {
  // Check local storage for user data
  let localUser = localStorage.getItem("currentUser");
  if(localUser) localUser = JSON.parse(localUser);

  // Set current user state
  let [currentUser, setCurrentUser] = useState(localUser ? localUser : {});

  let [favorites, setFavorites] = useState(localUser ? localUser.userPokemon : null);
  // Errors
  let [errors, setErrors] = useState({errors : null});

  // Call api for user information
  useEffect(() => {
    const updateUser = async () => {
      if(currentUser._token){
        const result = await PCAPI.getOne(currentUser.username, currentUser._token);
        if(result) {
          localStorage.setItem("currentUser", JSON.stringify({
            ...result,
            _token : currentUser._token
          }));
          setCurrentUser({
            ...result,
            _token : currentUser._token
          });
        }
      }
    }
    updateUser();
  }, [currentUser._token, favorites]);

  const signupUser = async (username, password, firstName, email) => {
    const result = await PCAPI.register(username, password, firstName, email);
    if(!result){

    }else{
      setCurrentUser({ 
        ...currentUser,
        ["username"] : username,
        ["_token"] : result
      })
    }
  }

  const loginUser = async (username, password) => {
    const result = await PCAPI.retrieve(username, password);

    if(result.error) {

      setErrors({
        errors : result.error
      })
    }else{
      localStorage.setItem("currentUser", JSON.stringify({username}));
      setCurrentUser({ 
        ...currentUser,
        ["username"] : username,
        ["_token"] : result
      })
    }

  }

  const logoutUser = async () => {
    localStorage.removeItem("currentUser");
    setCurrentUser({});
  }

  const favorite = async (userId, pokemonId, action) => {

    if(action == "add"){
      await PCAPI.addFavorite(userId, pokemonId, currentUser._token);
    }else if(action == "remove"){
      await PCAPI.removeFavorite(userId, pokemonId, currentUser._token);
    }
  }

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');
      </style>
      {/* Routes */}
      <currentUserContext.Provider value={currentUser}>
      <formsContext.Provider value={{ 
        loginUser, 
        signupUser,
        logoutUser,
        favorite,
        favorites,
        setFavorites} }>
        {currentUser.username ? <LoggedIn/> : <LoggedOut/>}
      </formsContext.Provider>
      </currentUserContext.Provider>

    </div>
  );
}

export default App;
