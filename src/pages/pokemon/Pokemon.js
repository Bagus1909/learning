import { apicase } from "@apicase/core";
import fetch from "@apicase/adapter-fetch";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const doRequest = apicase(fetch);

  const getPokemon = async () => {
    try {
      const response = await doRequest({
        url: "https://pokeapi.co/api/v2/pokemon",
        mode: "cors",
      });
      console.log("full response", response);

      const data = response.result.body.results;
      setPokemon(data);
      console.log("Daftar Pokemon :", data);
    } catch (error) {
      console.log("error fetch :", error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1>Daftar Pokemon</h1>
      <ul>
        {pokemon.map((poke) => (
          <li key={poke.url}>
            <Link to={poke.name}>{poke.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
