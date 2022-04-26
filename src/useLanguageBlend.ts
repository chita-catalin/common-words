import { useEffect, useState } from "react";
import axios from "axios";

const useLanguageBlend = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState<any>(null);
  const [selectedLanguage2, setSelectedLanguage2] = useState<any>(null);
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

  useEffect(() => {
    getLanguages();
  }, []);

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
  };
};

export default useLanguageBlend;
