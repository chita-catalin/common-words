import { useEffect, useState } from "react";
import axios from "axios";

const useLanguageBlend = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState<any>([]);
  const [selectedLanguage2, setSelectedLanguage2] = useState<any>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [blendedList, setBlendedList] = useState<any>([]);
  const [alert, setAlert] = useState<string>("");

  const getLanguages = async () => {
    setLoading(true);
    console.log(process.env);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/getLanguages`
      );

      if (response.status === 200) {
        setLanguages(response.data.data);
      }
      console.log("we recieve", response);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const getFirstLanguage = async (language: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/getLanguage?language=${language}`
      );

      if (response.status === 200) {
        setSelectedLanguage1(response.data.data[0].list);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const getSecondLanguage = async (language: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/getLanguage?language=${language}`
      );

      if (response.status === 200) {
        setSelectedLanguage2(response.data.data[0].list);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    if (selectedLanguage1.length > 0 && selectedLanguage2.length > 0) {
      let filteredArray: Array<string> = [];
      var i = 0;
      var j = 0;

      var count = [...selectedLanguage1, ...selectedLanguage2].reduce(
        (o, v) => {
          o[v] = o[v] + 1 || 1;
          return o;
        },
        {}
      );

      var duplicate = Object.keys(count)
        .filter((k) => count[k] > 2)
        .map(String);

      console.log(duplicate);

      setBlendedList(duplicate);
    }
  }, [selectedLanguage1, selectedLanguage2]);

  return {
    selectedLanguage1,
    setSelectedLanguage1,

    selectedLanguage2,
    setSelectedLanguage2,

    loading,
    setLoading,

    blendedList,
    setBlendedList,

    languages,
    setLanguages,

    alert,
    setAlert,

    getFirstLanguage,
    getSecondLanguage,
  };
};

export default useLanguageBlend;
