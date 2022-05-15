import { useEffect, useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState("english");

  const [commonWords, setCommonWords] = useState("COMMON WORDS");
  const [resources, setResources] = useState("resources");
  const [about, setAbout] = useState("about");
  const [changelog, setChangelog] = useState("changelog");
  const [startExploring, setStartExploring] = useState("START EXPLORING");
  const [landingPageText, setLandingPageText] = useState(
    "Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"
  );
  const [selectTwoLanguages, setSelectTwoLanguages] = useState(
    "Select two languages!"
  );
  const [wordsPerPage, setWordsPerPage] = useState("Words per page");
  const [words, setWords] = useState("Words");
  const [minWordLength, setMinWordLength] = useState("Min. word length");
  const [maxWordLength, setMaxWordLength] = useState("Max. word length");
  const [tools, setTools] = useState("tools");

  useEffect(() => {
    switch (language) {
      case "english":
        setCommonWords("COMMON WORDS");
        setResources("resources");
        setAbout("about");
        setChangelog("changelog");
        setStartExploring("START EXPLORING");
        setLandingPageText(
          "Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"
        );
        setSelectTwoLanguages("Select two languages!");
        setWordsPerPage("Words per page");
        setWords("Words");
        setMinWordLength("Min. word length");
        setMaxWordLength("Max. word length");
        setTools("tools");
        break;

      case "romanian":
        setCommonWords("CUVINTE COMUNE");
        setResources("resurse");
        setAbout("despre");
        setChangelog("istoric schimbari");
        setStartExploring("EXPLOREAZĂ");
        setLandingPageText(
          "Compară limba ta cu altă limbă! Găsește cuvintele comune, și alte statistici interesante despre limbi, complet gratuit!"
        );
        setSelectTwoLanguages("Selectează două limbi diferite!");
        setWordsPerPage("Cuvinte pe pagină");
        setWords("Cuvinte");
        setMinWordLength("Lungime minimă");
        setMaxWordLength("Lungime maximă");
        setTools("unelte");

        break;
    }
  }, [language]);

  return {
    language,
    setLanguage,
    commonWords,
    resources,
    about,
    changelog,
    startExploring,
    landingPageText,
    selectTwoLanguages,
    wordsPerPage,
    words,
    minWordLength,
    maxWordLength,
    tools,
  };
};
