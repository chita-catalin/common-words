import { useState } from "react";
import { EN_WORDS } from "../../../LanguageData/en_words";
import { FI_WORDS } from "../../../LanguageData/fi_words";
import { FR_WORDS } from "../../../LanguageData/fr_words";
import { IT_WORDS } from "../../../LanguageData/it_words";
import { RO_WORDS } from "../../../LanguageData/ro_words";

const useLanguageBlend = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState<string>("");
  const [selectedLanguage2, setSelectedLanguage2] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [blendedList, setBlendedList] = useState<any>([]);
  const [alert, setAlert] = useState<string>("");

  const languages = [
    { label: "English", id: "English" },
    { label: "Finnish", id: "Finnish" },
    { label: "French", id: "French" },
    { label: "Italian", id: "Italian" },
    { label: "Romanian", id: "Romanian" },
  ];

  const handleSelect1 = (e: any) => {
    setSelectedLanguage1(e.target.innerText);
  };

  const handleSelect2 = (e: any) => {
    setSelectedLanguage2(e.target.innerText);
  };

  const pickFlag = (language: number) => {
    let lang_code: string;
    if (language === 1) {
      lang_code = selectedLanguage1;
    } else {
      lang_code = selectedLanguage2;
    }

    switch (lang_code) {
      case "Romanian":
        return "ro";
      case "English":
        return "gb";

      case "Italian":
        return "it";

      case "French":
        return "fr";
      case "Finnish":
        return "fi";
    }
  };

  const blend = (language1: string, language2: string) => {
    setAlert("");
    setLoading(true);
    let arr1 = null;
    let arr2 = null;
    //set first language array
    switch (language1) {
      case "Romanian":
        arr1 = RO_WORDS;
        break;
      case "English":
        arr1 = EN_WORDS;
        break;
      case "Italian":
        arr1 = IT_WORDS;
        break;

      case "French":
        arr1 = FR_WORDS;
        break;

      case "Finnish":
        arr1 = FI_WORDS;
        break;
    }
    //set second language array
    switch (language2) {
      case "Romanian":
        arr2 = RO_WORDS;
        break;
      case "English":
        arr2 = EN_WORDS;
        break;
      case "Italian":
        arr2 = IT_WORDS;
        break;

      case "French":
        arr2 = FR_WORDS;
        break;

      case "Finnish":
        arr2 = FI_WORDS;
        break;
    }

    if (language1 !== language2) {
      if (arr1 && arr2) {
        let arr: any = [];
        for (let i = 0; i < arr1.length; i++) {
          for (let j = 0; j < arr2.length; j++) {
            if (arr1[i].word === arr2[j].word) {
              arr = [...arr, arr1[i]];
            }
          }
        }
        setBlendedList(
          arr.sort((a: any, b: any) => (a.word < b.word ? -1 : 1))
        );
        if (arr.length === 0) {
          setAlert("These languages have no common words");
        }
        console.log(blendedList);
      }
    } else {
      setAlert("Please select 2 different languages");
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

    pickFlag,
  };
};

export default useLanguageBlend;
