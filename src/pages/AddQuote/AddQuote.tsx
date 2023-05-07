import React from "react";
import { QuoteForm } from "../../components/QuoteForm/QuoteForm";
import { QuoteType, QuoteWithoutId } from "../../types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL =
  "https://betenov-repeat-default-rtdb.europe-west1.firebasedatabase.app/";

interface Props {
  quotes: QuoteType[];
}
export const AddQuote = ({ quotes }: Props) => {
  const navigate = useNavigate();

  const createQuote = async (quote: QuoteWithoutId) => {
    try {
      await axios.post(URL + "quotes.json/", quote);
      navigate("/");
    } finally {
    }
  };
  return (
    <div>
      <QuoteForm quotes={quotes} onFormSubmit={createQuote} />
    </div>
  );
};
