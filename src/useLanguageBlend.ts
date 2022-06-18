import { useEffect, useState } from "react";
import axios from "axios";

const useLanguageBlend = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState<any>([]);
  const [selectedLanguage2, setSelectedLanguage2] = useState<any>([]);
  const [lettersToIgnore, setLettersToIgnore] = useState<number>(0);
  const [languageCode1, setLanguageCode1] = useState<string>("");
  const [languageCode2, setLanguageCode2] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [blendedList, setBlendedList] = useState<any>([]);
  const [alert, setAlert] = useState<string>("");
  const [tableView, setTableView] = useState<boolean>(true);

  //filtered list
  const [filteredList, setFilteredList] = useState<string[]>([]);

  //controls
  const [minLength, setMinLength] = useState<number>(0);
  const [maxLength, setMaxLength] = useState<number>(99);

  const getLanguages = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/getLanguages`
      );

      if (response.status === 200) {
        setLanguages(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const getFirstLanguage = async (language: string) => {
    setLoading(true);

    //update language code for language1
    switch (language) {
      case "english":
        setLanguageCode1("en");
        break;
      case "finnish":
        setLanguageCode1("fi");
        break;
      case "french":
        setLanguageCode1("fr");
        break;
      case "german":
        setLanguageCode1("de");
        break;
      case "hungarian":
        setLanguageCode1("hu");
        break;
      case "italian":
        setLanguageCode1("it");
        break;
      case "polish":
        setLanguageCode1("pl");
        break;
      case "romanian":
        setLanguageCode1("ro");
        break;
      case "spanish":
        setLanguageCode1("es");
        break;
      case "turkish":
        setLanguageCode1("tr");
        break;
    }

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

    //update language code for language2
    switch (language) {
      case "english":
        setLanguageCode2("en");
        break;
      case "finnish":
        setLanguageCode2("fi");
        break;
      case "french":
        setLanguageCode2("fr");
        break;
      case "german":
        setLanguageCode2("de");
        break;
      case "hungarian":
        setLanguageCode2("hu");
        break;
      case "italian":
        setLanguageCode2("it");
        break;
      case "polish":
        setLanguageCode2("pl");
        break;
      case "romanian":
        setLanguageCode2("ro");
        break;
      case "spanish":
        setLanguageCode2("es");
        break;
      case "turkish":
        setLanguageCode2("tr");
        break;
    }

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
      var count = [...selectedLanguage1, ...selectedLanguage2].reduce(
        (o, v) => {
          o[v] = o[v] + 1 || 1;
          return o;
        },
        {}
      );

      var duplicate = Object.keys(count)
        .filter((k) => count[k] > 1)
        .map(String);

      setBlendedList(duplicate);
    }

    //set language codes
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

    languageCode1,
    setLanguageCode1,
    languageCode2,
    setLanguageCode2,

    lettersToIgnore,
    setLettersToIgnore,

    tableView,
    setTableView,

    minLength,
    setMinLength,

    maxLength,
    setMaxLength,

    filteredList,
    setFilteredList,
  };
};

export default useLanguageBlend;
