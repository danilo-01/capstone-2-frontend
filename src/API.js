import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const BASE_URL_POKEMON_API = "https://pokeapi.co/api/v2";

class PCAPI{
    static async request(endpoint, data = {}, method = "get", token="") {
        console.debug("API Call:", endpoint, data, method, token, BASE_URL);
    
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${token}` };
        const params = (method === "get")
            ? data
            : {};
        try {
          return (await axios({ url, method, data, params, headers }));
        } catch (err) {
          console.error("API Error:", err.response);
          return {error : err.response.data.message};
        }
      }

    static async getOne(username, token){
        const result = await this.request(`users/${username}`, {}, "get", token );
        return result ? result.data : null
    }

    // Get JWT'S
    static async register(username, password, firstName, email){
      const result = await this.request("auth/register", 
      {username, password, firstName, email},
      "post");

      if(!result) return undefined;
      return result.data._token;
    }

    static async retrieve(username, password){
      const result = await this.request("auth/retrieve", {username, password}, "post");

      if(result.error) return result;
      return result.data._token;
    }

    static async addFavorite(userId, pokemonId, token){
      await this.request("pokemon/", {
        userId,
        pokemonId,
        _token : token
      }, "post",
      token);
      return undefined;
    }

    static async removeFavorite(userId, pokemonId, token){
      await this.request("pokemon/", {
        userId,
        pokemonId,
        _token : token
      }, "delete",
      token);
      return undefined;
    }

    static async userFavorites(userId, token){
      const result = await this.request(`/pokemon/${userId}`, {}, "get", token);
      return result.data["favorites"];
    }
}

class POKEMONAPI {

  static async getPokemon(limit, offset){
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

    return result.data;
  }

  static async getSinglePokemon(url){
    const result = await axios.get(url);
    return result.data;
  }
}

export { 
  PCAPI,
  POKEMONAPI
 };