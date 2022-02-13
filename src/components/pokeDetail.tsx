import React from "react";
import { useParams, Link } from "react-router-dom";

const PokeDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = React.useState<PokemonDetail>();
  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((json: PokemonDetail) => {
        console.log(json);
        setInfo(json);
      });
    });
  }, [id]);
  return (
    <section>
      {info && (
        <div>
          <h2>{info.name}</h2>
          <img
            src={info.sprites.other["official-artwork"].front_default}
            alt={info.name}
          />
        </div>
      )}
      <Link to="/">
        <button>Go to list</button>
      </Link>
    </section>
  );
};

interface PokemonDetail {
  name: string;
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export default PokeDetail;
