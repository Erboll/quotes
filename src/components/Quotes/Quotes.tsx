import { QuoteType } from "../../types";
import { Quote } from "../Quote/Quote";
import styles from "./Quotes.module.css";

interface Props {
  quotes: QuoteType[];
  test: () => void;
}

export const Quotes = ({ quotes, test }: Props) => {
  return (
    <div className={styles.quotes}>
      {quotes.map((quote) => (
        <Quote quote={quote} key={quote.text} testFetch={test} />
      ))}
    </div>
  );
};
