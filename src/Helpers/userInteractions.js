class UserInteractions {
    static async signupUser(username, password, firstName, email){
        const result = await PCAPI.register(username, password, firstName, email);
        if(!result){
          console.log("Invalid");
        }else{
          setCurrentUser({ 
            ...currentUser,
            ["username"] : username,
            ["_token"] : result
          })
        }
      }
    
    static async loginUser(username, password){
        const result = await PCAPI.retrieve(username, password);
        
        if(!result) {
          console.log("Invalid username or password.");
        }else{
          setCurrentUser({ 
            ...currentUser,
            ["username"] : username,
            ["_token"] : result
          })
        }
    
      }
    
    static async logoutUser(){
        localStorage.removeItem("currentUser");
        setCurrentUser({});
      }
}