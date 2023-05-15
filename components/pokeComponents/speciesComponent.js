import axios from "axios";
import useSWR from "swr";

function PokeSpecies({ pokemonID }) {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`, fetcher);

  if (error) return "An error has ocurred";
  if (!data) return "Loading";
  return (
    <>
      <div key={"pokespecies"}>
        <p> {data.data.flavor_text_entries[0].flavor_text}</p>
      </div>
    </>
  );
}

export default PokeSpecies;

const fetcher = async (url) => {
  let res = await axios.get(url);
  return res;
};
