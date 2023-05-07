import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"} className={styles.logo}>
        Quotes Central
      </Link>
      <div className={styles.navQuote}>
        <Link className={styles.quote} to={"/"}>
          Quotes
        </Link>
        <Link to={"/addQuote"}>Submit new quotes</Link>
      </div>
    </div>
  );
};
