import style from "../../styles/statsStyle.module.css";
import ProgressBar from "../progress-bar.component";
function StatsComponent({ pokemonData }) {
  // console.log(`Log of Stats ${JSON.stringify(pokemonData.stats)}`);
  var total = 0;

  pokemonData.stats.map((stats) => {
    total += stats.base_stat;
  });

  return (
    <>
      <div>
        {pokemonData.stats.map((statData) => {
          let statname = statData.stat.name;
          let percentage = statData.base_stat;
          statname = statname.replaceAll("-", " ");
          statname = statname.replaceAll("special", "sp.");

          return (
            <div className={[style.row, style.container].join(" ")}>
              <p style={{ width: "140px" }}>{statname}</p>
              <p>:</p>
              {/* <p>{statData.base_stat}</p> */}
              <ProgressBar
                bgcolor={
                  statname == "hp"
                    ? "#FF5959"
                    : statname == "attack"
                    ? "#F5AC78"
                    : statname == "defense"
                    ? "#FAE078"
                    : statname == "sp. attack"
                    ? "#9DB7F5"
                    : statname == "sp. defense"
                    ? "#A7DB8D"
                    : "#FA92B3"
                }
                value={statData.base_stat}
                completed={((percentage * 100) / total) * 2.5}
              ></ProgressBar>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StatsComponent;
