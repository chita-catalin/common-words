import { useState } from "react";

const useLanguageBlend = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState<any>(null);
  const [selectedLanguage2, setSelectedLanguage2] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [blendedList, setBlendedList] = useState<any>([]);
  const [alert, setAlert] = useState<string>("");

  const languages = [
    { label: "English", id: "English" },
    { label: "Finnish", id: "Finnish" },
    { label: "French", id: "French" },
    { label: "Hungarian", id: "Hungarian" },
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

      case "Hungarian":
        return "hu";
    }
    return "gb";
  };

  const blend = (language1: string, language2: string) => {
    setAlert("");
    setLoading(true);
    let arr1 = null;
    let arr2 = null;
    //set first language array
    // switch (language1) {
    //   case "Romanian":
    //     arr1 = RO_WORDS;
    //     break;
    //   case "English":
    //     arr1 = EN_WORDS;
    //     break;
    //   case "Italian":
    //     arr1 = IT_WORDS;
    //     break;

    //   case "French":
    //     arr1 = FR_WORDS;
    //     break;

    //   case "Finnish":
    //     arr1 = FI_WORDS;
    //     break;

    //   case "Hungarian":
    //     arr1 = HU_WORDS;
    //     break;
    // }
    // //set second language array
    // switch (language2) {
    //   case "Romanian":
    //     arr2 = RO_WORDS;
    //     break;
    //   case "English":
    //     arr2 = EN_WORDS;
    //     break;
    //   case "Italian":
    //     arr2 = IT_WORDS;
    //     break;

    //   case "French":
    //     arr2 = FR_WORDS;
    //     break;

    //   case "Finnish":
    //     arr2 = FI_WORDS;
    //     break;

    //   case "Hungarian":
    //     arr2 = HU_WORDS;
    //     break;
    // }

    // if (language1 !== language2) {
    //   if (arr1 && arr2) {
    //     let arr: any = [];
    //     for (let i = 0; i < arr1.length; i++) {
    //       for (let j = 0; j < arr2.length; j++) {
    //         if (arr1[i].word === arr2[j].word) {
    //           arr = [...arr, arr1[i]];
    //         }
    //       }
    //     }
    //     setBlendedList(arr);
    //     if (arr.length === 0) {
    //       setAlert("These languages have no common words");
    //     }
    //     console.log(blendedList);
    //   }
    // } else {
    //   setAlert("Please select 2 different languages");
    // }
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