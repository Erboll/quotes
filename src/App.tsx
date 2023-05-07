import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { EditQuote } from "./pages/EditQuote/EditQuote";
import { Home } from "./pages/Home/Home";
import { QuoteApi, QuoteType } from "./types";
import { Quotes } from "./components/Quotes/Quotes";
import { AddQuote } from "./pages/AddQuote/AddQuote";

const URL =
  "https://betenov-repeat-default-rtdb.europe-west1.firebasedatabase.app/";

function App() {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const location = useLocation();
  const fetchQuote = useCallback(async () => {
    const response = await axios.get<QuoteApi>(URL + "quotes.json");
    const responseData = response.data;

    const keysOfQuote = Object.keys(responseData).map((key) => {
      const quote = responseData[key];
      quote.id = key;
      return quote;
    });

    setQuotes(keysOfQuote);
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      void fetchQuote();
    }
  }, [fetchQuote, location]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes/:id/editQuote" element={<EditQuote />} />
        <Route path="/addQuote" element={<AddQuote quotes={quotes} />} />
        <Route
          path="/quotes/"
          element={<Quotes quotes={quotes} test={fetchQuote} />}
        />
        <Route path="/quotes/:id" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
