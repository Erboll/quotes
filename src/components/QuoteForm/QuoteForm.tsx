import React, { useState } from "react";
import styles from "./QuoteForm.module.css";
import { QuoteType, QuoteWithoutId } from "../../types";

interface Props {
  quotes?: QuoteType[];
  onFormSubmit: (quote: QuoteWithoutId) => void;
  existingQuote?: QuoteWithoutId;
  isEdit?: boolean;
}

const initialState: QuoteWithoutId = { author: "", text: "", category: "" };

export const QuoteForm = ({
  quotes,
  onFormSubmit,
  existingQuote = initialState,
  isEdit = false,
}: Props) => {
  const [quote, setQuote] = useState<QuoteWithoutId>(existingQuote);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit({
      ...quote,
    });
  };

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setQuote((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={styles.form}>
      <h1> {isEdit ? "Edit a quote" : "Submit a quote"} </h1>
      <form onSubmit={onSubmit}>
        <select
          className={styles.select}
          name="category"
          value={quote.category}
          onChange={onChange}
        >
          {quotes?.map((q) => (
            <option key={q.id} value={q.category}>
              {q.category}
            </option>
          ))}
        </select>
        <label className={styles.labelAuthor}>
          {" "}
          Author
          <input
            type="text"
            className={styles.author}
            name="author"
            value={quote.author}
            onChange={onChange}
          />
        </label>
        <label className={styles.labelText}>
          {" "}
          Quote text
          <textarea
            rows={2}
            name="text"
            cols={30}
            className={styles.text}
            value={quote.text}
            onChange={onChange}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Save
        </button>
      </form>
    </div>
  );
};
