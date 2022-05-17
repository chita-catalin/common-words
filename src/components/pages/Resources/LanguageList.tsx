import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

const LanguageList = () => {
  const { language }: any = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [wordList, setWordList] = useState<string[]>([]);

  const getLanguage = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/getLanguage?language=${language}`
      );

      if (response.status === 200) {
        setWordList(response.data.data[0].list);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <>
      {loading === true && <CircularProgress id="resource-spinner" />}
      <p style={{ whiteSpace: "pre" }}>{wordList.join("\r\n")}</p>
    </>
  );
};

export default LanguageList;
