import React from "react";
import { Link } from "react-router-dom";

const PokeList = () => {
  const startAt = "0";
  const limitPerPage = "10";
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  const [list, setList] = React.useState<PokemonList>();
  const [url, setUrl] = React.useState<string>(
    `${baseUrl}?limit=${limitPerPage}&offset=${startAt}`
  );
  React.useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((json: PokemonList) => {
        setList(json);
      });
    });
  }, [url]);

  const getPokemonId = (pokeUrl: string): string => {
    return pokeUrl.replace(baseUrl + "/", "");
  };

  return (
    <section>
      <img className="logo" src="/images/pokemon-logo.png" alt="pokemon" />
      {list && (
        <>
          <ul>
            {list.results.map((info, index: number) => (
              <Link key={info.name} to={`/detail/${getPokemonId(info.url)}`}>
                <li>{info.name}</li>
              </Link>
            ))}
          </ul>
          <div className="actions">
          <button onClick={() => list.previous && setUrl(list.previous)}>
            Previus
          </button>
          <button onClick={() => list.next && setUrl(list.next)}>Next</button>
          </div>
        </>
      )}
    </section>
  );
};

interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResults[];
}

interface PokemonResults {
  name: string;
  url: string;
}

export default PokeList;
