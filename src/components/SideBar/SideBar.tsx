import { Link } from "react-router-dom";
import { Links } from "../Links/Links";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  const quotes = [
    { title: "Motivation", id: "motivation" },
    { title: "Philosophy", id: "philosophy" },
    { title: "Famous people", id: "famous-people" },
    { title: "Movie", id: "movie" },
    { title: "About life", id: "about-life" },
  ];

  return (
    <div className={styles.sidebar}>
      <Link className={styles.all} to={"/quotes"}>
        All
      </Link>

      {quotes.map((quote) => (
        <Links key={quote.id} quote={quote} />
      ))}
    </div>
  );
};
