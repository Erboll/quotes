import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuoteForm } from "../../components/QuoteForm/QuoteForm";
import { QuoteWithoutId } from "../../types";

const URL =
  "https://betenov-repeat-default-rtdb.europe-west1.firebasedatabase.app/";

export const EditQuote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quoteForm, setQuoteForm] = useState<QuoteWithoutId | null>(null);

  const fetchQuote = useCallback(async () => {
    const response = await axios.get(URL + "quotes/" + id + ".json");

    setQuoteForm(response.data);
  }, [id]);

  useEffect(() => {
    void fetchQuote();
  }, [fetchQuote]);

  const upDate = async (quote: QuoteWithoutId) => {
    await axios.put(URL + "quotes/" + id + ".json", quote);
    navigate("/");
  };
  return (
    <div>
      {quoteForm && (
        <QuoteForm onFormSubmit={upDate} existingQuote={quoteForm} isEdit />
      )}
    </div>
  );
};
