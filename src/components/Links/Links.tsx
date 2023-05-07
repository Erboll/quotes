import { Link } from "react-router-dom";
import { QuoteLink } from "../../types";
import styles from "./Links.module.css";

interface Props {
  quote: QuoteLink;
}

export const Links = ({ quote }: Props) => {
  return (
    <div>
      <Link className={styles.quotes} to={"/quotes/" + quote.id}>
        {quote.title}
      </Link>
    </div>
  );
};
