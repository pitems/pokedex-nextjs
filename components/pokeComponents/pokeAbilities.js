import abilistyles from "../../styles/pokeabilities.module.css";

function AbilitiesComponent({ abilities }) {
  return (
    <>
      <div className={abilistyles.displayDiv}>
        {/*Need to add a column for the title  */}
        <div className={abilistyles.header}>
          <h3>Abilities</h3>
          <div className={abilistyles.abilities}>
            {abilities.map((ability, index) => {
              return (
                <div key={index} className={abilistyles.abilitiesContainer}>
                  <h3>{ability.ability.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
        {/*Need to create a row for elements inside map  */}
      </div>
    </>
  );
}
export default AbilitiesComponent;
