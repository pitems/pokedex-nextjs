import PokeHeader from "@/components/pokemonHeader";
import { useRouter } from "next/router";
import styles from "../../styles/pokemonDetail.module.css";
import PokemonTable from "@/components/pokeComponents/pokeTable";

function PokemonDetail({ pokemonData }) {
  const router = useRouter();
  const pokemonID = router.query.pokemonID;
  //We will call using a method similar to getListPokemon method
  //to get multiple data about a certain pokemon
  return (
    <>
      <PokeHeader></PokeHeader>
      <div className={styles.background}>
        <div className={styles.pokeContainer}></div>
        <PokemonTable
          pokemonID={pokemonID}
          pokemonData={pokemonData}
        ></PokemonTable>
        <div className={styles.row}></div>
      </div>
    </>
  );
}

export default PokemonDetail;

export async function getServerSideProps(context) {
  const { params } = context;
  const { pokemonID } = params;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
  );
  const data = await response.json();
  // console.log(data);
  return {
    props: {
      pokemonData: data,
    },
  };
}
