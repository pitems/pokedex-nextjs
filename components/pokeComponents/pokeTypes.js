import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import style from "../../styles/poketypes.module.css";
function PokeTypes({ pokemonData }) {
  // const { data, error } = useSWR(url, fetcher);

  // if (error) return "An error has ocurred";
  // if (!data) return "Loading";
  return (
    <>
      <div className={style.displayDiv}>
        <div className={style.header}>
          <h3>Types</h3>
          <div className={style.types}>
            {pokemonData.types.map((type) => {
              let typeData = type.type.name;
              return (
                <div
                  key={type.type.url}
                  className={`${style.typeContainer} ${styleSelector(
                    typeData
                  )}`}
                >
                  <h3>{type.type.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokeTypes;
//Move this function outside of the component
const styleSelector = (typeElement) => {
  switch (typeElement) {
    case "grass":
      return style.grass;
    case "poison":
      return style.poison;
    case "fire":
      return style.fire;
    case "flying":
      return style.flying;
    case "water":
      return style.water;
    case "normal":
      return style.normal;
    case "fighting":
      return style.fighting;
    case "electric":
      return style.electric;
    case "ground":
      return style.ground;
    case "psychic":
      return style.psychic;
    case "rock":
      return style.rock;
    case "ice":
      return style.ice;
    case "bug":
      return style.bug;
    case "dragon":
      return style.dragon;
    case "ghost":
      return style.ghost;
    case "dark":
      return style.dark;
    case "steel":
      return style.steel;
    case "fairy":
      return style.fairy;
  }
};
// const fetcher = async (url) => {
//   let res = await axios.get(url);
//   return res;
// };
