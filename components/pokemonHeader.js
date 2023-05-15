import styles from "../styles/mainStyle.module.css";
function PokeHeader() {
  return (
    <>
      {/* <div className={styles.pokedexHeader}></div> */}
      <div className={styles.baseHeader}>
        <div>
          <img className={styles.imgHeader} src="/assets/baseHeader1.png"></img>
        </div>
        <div className={styles.filler}>
          <h3>Pokedex</h3>
        </div>
        <div>
          <img className={styles.imgHeader} src="/assets/headerRight.png"></img>
        </div>
      </div>
    </>
  );
}

export default PokeHeader;
