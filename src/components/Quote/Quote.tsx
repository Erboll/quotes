import { Link } from "react-router-dom";
import { QuoteType } from "../../types";
import styles from "./Quote.module.css";
import axios from "axios";

const URL =
  "https://betenov-repeat-default-rtdb.europe-west1.firebasedatabase.app/";

interface Props {
  quote: QuoteType;
  testFetch: () => void;
}

export const Quote = ({ quote, testFetch }: Props) => {
  const firstWord = (word: string) => {
    if (!word) return word;
    return word[0].toUpperCase() + word.slice(1);
  };

  const deleteQuote = async (id: string) => {
    await axios.delete(URL + "quotes/" + id + ".json");
    await testFetch();
  };

  return (
    <div className={styles.quoteDiv}>
      <h3 className={styles.category}>{firstWord(quote.category)}</h3>
      <p className={styles.quote}>{quote.text}</p>
      <p className={styles.author}>
        (c){" "}
        <b>
          <i>{quote.author}</i>
        </b>
      </p>
      <div className={styles.buttons}>
        <Link className={styles.edit} to={"/quotes/" + quote.id + "/editQuote"}>
          Edit
        </Link>
        <button
          className={styles.deleteBtn}
          onClick={() => deleteQuote(quote.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
