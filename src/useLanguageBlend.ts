import { useEffect, useState } from "react";
import axios from "axios";

const useLanguageBlend = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState<any>([]);
  const [selectedLanguage2, setSelectedLanguage2] = useState<any>([]);
  const [languageCode1, setLanguageCode1] = useState<string>("");
  const [languageCode2, setLanguageCode2] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [blendedList, setBlendedList] = useState<any>([]);
  const [alert, setAlert] = useState<string>("");

  //word restrictions
  const [prefixLetters, setPrefixLetters] = useState<number>(3);

  //controls
  const [minLength, setMinLength] = useState<number>(3);
  const [maxLength, setMaxLength] = useState<number>(10);

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
        setSelectedLanguage1(
          response.data.data[0].list.map((el: string) => el + "1")
        );
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
        setSelectedLanguage2(
          response.data.data[0].list.map((el: string) => el + "2")
        );
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
    //for prefix stuff
    if (prefixLetters !== 0) {
      if (selectedLanguage1.length > 0 && selectedLanguage2.length > 0) {
        var words = [...selectedLanguage1, ...selectedLanguage2].reduce(
          (o, v) => {
            let key = v.substring(0, prefixLetters);
            o[key] = o[key] === undefined ? "" : o[key] + "|" + v;
            return o;
          },
          {}
        );

        var filteredArray = Object.keys(words)
          .map(String)
          .map((key: string) => {
            if (words[key].split("|").length >= 3) return words[key].split("|");
          })
          .filter((el: any) => {
            if (el !== undefined) return true;
            return false;
          });
        console.log(filteredArray);

        setBlendedList(filteredArray);
      }
    } else {
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
    }

    //set language codes
  }, [selectedLanguage1, selectedLanguage2, prefixLetters]);

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

    minLength,
    setMinLength,

    maxLength,
    setMaxLength,

    prefixLetters,
    setPrefixLetters,
  };
};

export default useLanguageBlend;
