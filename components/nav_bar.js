import styles from "../styles/mainStyle.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className={styles.navBarLinks}>
        <Link href="/users">
          <button className={styles.buttonLink}>Users</button>{" "}
        </Link>
        <Link href={"/posts"}>
          <button className={styles.buttonLink}>Posts</button>
        </Link>
        <Link href={"/pokemon"}>
          <button className={styles.buttonLink}>PokeDex</button>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
