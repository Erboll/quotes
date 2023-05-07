import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Quotes } from "../../components/Quotes/Quotes";
import { SideBar } from "../../components/SideBar/SideBar";
import { QuoteType } from "../../types";
import styles from "./Home.module.css";

const URL =
  "https://betenov-repeat-default-rtdb.europe-west1.firebasedatabase.app/";

export const Home = () => {
  const { id } = useParams();

  const [quotess, setQuotess] = useState<QuoteType[]>([]);
  const test = `"${id}"`;

  const fetchCategory = useCallback(async () => {
    const response = await axios.get(
      URL + 'quotes.json?orderBy="category"&equalTo=' + test
    );
    const responseData = response.data;
    const keys = Object.keys(responseData).map((key) => {
      const response = responseData[key];
      return response;
    });

    setQuotess(keys);
  }, [test]);

  useEffect(() => {
    void fetchCategory();
  }, [fetchCategory]);

  return (
    <div className={styles.home}>
      <SideBar />
      <Quotes
        quotes={quotess}
        test={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};
