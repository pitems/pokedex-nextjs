import styles from "../../styles/mainStyle.module.css";
import { useEffect, useState } from "react";
import getListPokemon from "./getListPokemon";
import PokeHeader from "@/components/pokemonHeader";
import Link from "next/link";

function Pokemon({ pokemon, images }) {
  //Call the rest of the list as a SWR
  const { data, error } = getListPokemon("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
  if (error) return "An error has ocurred";
  if (!data) return "Loading";
  return (
    <>
      <PokeHeader></PokeHeader>

      <div className={styles.containerGrid}>
        {pokemon.results.map((poke, index) => {
          return (
            <Link href={`pokemon/${poke.name}`}>
              <div key={poke.url}>
                <div className={styles.pokeItems}>
                  <img src={images[index]} />
                  <h2 className={styles.subText}>{poke.name}</h2>
                </div>
              </div>
            </Link>
          );
        })}
        {/* Looping through SWR fetcher data */}
        {data.items.results.map((poke, index) => {
          return (
            <div key={poke.url}>
              <img className={styles.img} src={data.images[index]} />
              <h2 className={styles.subText}>{poke.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pokemon;

export async function getServerSideProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  const images = await Promise.all(
    data.results.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      return data.sprites.front_default;
      //   console.log(response.sprites.front_default);
    })
  );
  return {
    props: {
      pokemon: data,
      images: images,
    },
  };
}
