import PokeSpecies from "@/components/pokeComponents/speciesComponent";
import styles from "../../styles/pokemonDetail.module.css";
import AbilitiesComponent from "./pokeAbilities";
import PokeTypes from "./pokeTypes";
import StatsComponent from "./statsComponent";
function PokemonTable({ pokemonID, pokemonData }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          marginTop: "40px",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <div className={styles.rowDetail}>
          <img src={pokemonData.sprites.front_default}></img>
          {/*Need A column  */}
          <div className={styles.column}>
            <div style={{ color: "black" }}>
              <h1> {pokemonData.name.toUpperCase()}</h1>
            </div>
            <PokeSpecies pokemonID={pokemonID}></PokeSpecies>
            <hr></hr>
            <div className={styles.row} style={{ columnGap: "10px" }}>
              <div className={styles.column}>
                <p>Weight</p>
                <h3>{pokemonData.weight * 0.1} KG</h3>
              </div>
              <div className={styles.column}>
                <p>Height</p>
                <h3>{pokemonData.height / 10} Mts</h3>
              </div>
              <div className={styles.column}>
                <p>Base Experience</p>
                <h3>{pokemonData.base_experience} points</h3>
              </div>
            </div>
          </div>

          {/* <div className={styles.box}>box</div> */}
          <div
            className={styles.columnBoxData}
            style={{ backgroundColor: "#78C851" }}
          >
            <div
              key={"types"}
              style={{
                marginRight: "10px",
                marginLeft: "10px",
                marginTop: "5px",
              }}
            >
              <PokeTypes pokemonData={pokemonData}></PokeTypes>
            </div>

            {/* Change this element an make it centered multiple colors are added to check data */}
            <div
              key={"abilities"}
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              <AbilitiesComponent
                abilities={pokemonData.abilities}
              ></AbilitiesComponent>

              <StatsComponent pokemonData={pokemonData}></StatsComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PokemonTable;
