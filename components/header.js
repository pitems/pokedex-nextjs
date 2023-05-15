import styles from "../styles/mainStyle.module.css"
import NavBar from "./nav_bar";
import Link from "next/link";

function HeaderDesign(){
    return<>
     <div className={styles.header}>
     <Link href="/" ><h1>  Welcome to my Next JS Design Page</h1></Link>
        <p>Starting to learn CSS and Next</p>
        </div>
       <NavBar></NavBar>
     </>
}

export default HeaderDesign;