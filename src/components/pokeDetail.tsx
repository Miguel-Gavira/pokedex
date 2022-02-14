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
        <div className="content">
          <div className="profilePhoto">
            <div className="image">
              <img
                src={
                  info.sprites.other["official-artwork"].front_default ||
                  info.sprites.front_shiny ||
                  info.sprites.front_default
                }
                alt={info.name}
              />
            </div>
            <div>
              <h1>{info.name}</h1>
            </div>
          </div>
          <hr />
          <div className="data">
            <div>
              <h2>{info.weight}</h2>
              <p>Weight</p>
            </div>
            <div>
              <h2>{info.height}</h2>
              <p>Height</p>
            </div>
            <div>
              <h2>{info.order}</h2>
              <p>Order</p>
            </div>
          </div>
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
      )}
    </section>
  );
};

interface PokemonDetail {
  name: string;
  weight: number;
  height: number;
  order: number;
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
