import { apicase } from "@apicase/core";
import fetch from "@apicase/adapter-fetch";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const doRequest = apicase(fetch);

  const getDetailPokemon = useCallback(async () => {
    try {
      const response = await doRequest({
        url: `https://pokeapi.co/api/v2/pokemon/${name}`,
        mode: "cors",
      });
      const data = response.result.body;
      setPokemon(data);
      console.log("data detail pokemon", data);
    } catch (error) {
      console.log("error fetch", error);
    }
  });

  useEffect(() => {
    getDetailPokemon();
  }, [name]);

  return (
    <div>
      <h2> {pokemon?.name} </h2>
      <img
        src={pokemon?.sprites.front_default}
        alt='Bulbasaur'
      />
      <p>Height: {pokemon?.height}</p>
      <p>Weight: {pokemon?.weight}</p>
      <h3>Abilities:</h3>
      <ul>
        {pokemon?.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
