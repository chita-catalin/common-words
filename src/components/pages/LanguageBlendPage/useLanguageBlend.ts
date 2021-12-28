import { useState } from "react";
import { EN_WORDS } from "../../../LanguageData/en_words";
import { RO_WORDS } from "../../../LanguageData/ro_words";

const useLanguageBlend = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState<string>("");
  const [selectedLanguage2, setSelectedLanguage2] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [blendedList, setBlendedList] = useState<any>([]);
  const [alert, setAlert] = useState<boolean>(false);

  const languages = [
    { label: "Romanian", id: "Romanian" },
    { label: "English", id: "English" },
  ];

  function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const handleSelect1 = (e: any) => {
    setSelectedLanguage1(e.target.innerText);
  };

  const handleSelect2 = (e: any) => {
    setSelectedLanguage2(e.target.innerText);
  };

  const blend = (language1: string, language2: string) => {
    setAlert(false);
    setLoading(true);
    let arr1 = null;
    let arr2 = null;
    if (
      (language1 === "Romanian" && language2 === "English") ||
      (language1 === "English" && language2 === "Romanian")
    ) {
      arr1 = RO_WORDS;
      arr2 = RO_WORDS;

      if (arr1 && arr2) {
        let arr: any = [];
        for (let i = 0; i < RO_WORDS.length; i++) {
          for (let j = i + 1; j < EN_WORDS.length; j++) {
            if (RO_WORDS[i].word == EN_WORDS[j].word) {
              arr = [...arr, RO_WORDS[i].word];
            }
          }
        }
        setBlendedList(arr.sort((a: any, b: any) => (a > b ? 1 : -1)));

        window.scrollTo({ top: 700, behavior: "smooth" });
      }
    } else {
      setAlert(true);
    }
    setLoading(false);
  };

  const compare = async () => {
    setLoading(true);
    blend(selectedLanguage1, selectedLanguage2);
    setLoading(false);
  };

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
    compare,

    handleSelect1,
    handleSelect2,

    alert,
    setAlert,
  };
};

export default useLanguageBlend;
