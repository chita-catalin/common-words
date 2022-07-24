import { useEffect, useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState("english");

  const [explore, setExplore] = useState("Explore");
  const [compareLanguages, setCompareLanguages] = useState("Compare languages");
  const [viewList, setViewList] = useState("View list");

  const [commonWords, setCommonWords] = useState<string>("COMMON WORDS");
  const [resources, setResources] = useState("resources");
  const [about, setAbout] = useState("about");
  const [changelog, setChangelog] = useState("changelog");
  const [startExploring, setStartExploring] = useState("START EXPLORING");
  const [landingPageText, setLandingPageText] = useState(
    "Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"
  );

  //tools page
  const [tools, setTools] = useState("tools");
  const [textScraper, setTextScraper] = useState("UNIQUE WORDS IDENTIFIER");
  const [goBack, setGoBack] = useState("Go back");
  const [extractUniqueWords, setExtractUniqueWords] = useState(
    "Extract unique words"
  );
  const [
    extractTheUniqueWordsFromAnyText,
    setExtractTheUniqueWordsFromAnyText,
  ] = useState("Extract the unique words from any text!");
  const [clear, setClear] = useState("CLEAR");
  const [uniqueWordsWillAppearHere, setUniqueWordsWillAppearHere] = useState(
    "Unique words will appear here!"
  );
  const [initialWords, setInitialWords] = useState("Initial words");
  const [uniqueWords, setUniqueWords] = useState("Unique words");
  //blend page
  const [selectTwoLanguages, setSelectTwoLanguages] = useState(
    "Select two languages!"
  );
  const [wordsPerPage, setWordsPerPage] = useState("Words per page");
  const [words, setWords] = useState("Words");
  const [minWordLength, setMinWordLength] = useState("Min. word length");
  const [maxWordLength, setMaxWordLength] = useState("Max. word length");
  const [wordMatch, setWordMatch] = useState("Word match (different letters)");
  //about page
  const [findTheCommonWordsOfLanguages, setFindTheCommonWordsOfLanguages] =
    useState("FIND THE COMMON WORDS OF LANGUAGES");
  const [developerAndCommunity, setDeveloperAndCommunity] = useState(
    "DEVELOPER & COMMUNITY"
  );
  const [getInvolved, setGetInvolved] = useState("GET INVOLVED!");
  const [contribuitors, setContribuitors] = useState("CONTRIBUTORS:");
  const [appBuiltUsingMERN, setAppBuiltUsingMERN] = useState(
    "THIS WEB APP WAS BUILT USING THE MERN STACK"
  );
  //resources
  const [languageWordList, setLanguageWordList] = useState(
    "Language word lists (all words)"
  );
  //languages
  const [english, setEnglish] = useState("English");
  const [finnish, setFinnish] = useState("Finnish");
  const [french, setFrench] = useState("French");
  const [german, setGerman] = useState("German");
  const [hungarian, setHungarian] = useState("Hungarian");
  const [italian, setItalian] = useState("Italian");
  const [polish, setPolish] = useState("Polish");
  const [romanian, setRomanian] = useState("Romanian");
  const [spanish, setSpanish] = useState("Spanish");
  const [turkish, setTurkish] = useState("Turkish");
  //ChangeLog
  const [update1, setUpdate1] = useState("Project created");
  const [update2, setUpdate2] = useState("Added basic language blending");
  const [update3, setUpdate3] = useState(
    `Added Italian,French,Finnish languages\nEnhanced results page.\nadded ${"changelog"} section.\nadded country flags.\nadded dark/light theme switch`
  );
  const [update4, setUpdate4] = useState(
    `Removed language lists from frontend side\nAdded about section\nRemoved light/dark theme switch\nEnhanced landing page UI\nUpdated versioning system to match web standards`
  );
  const [update5, setUpdate5] = useState(
    `Connected to Backend App\nNow retreiving languages list from database\nAdded not-yet-functional table to "blend-page"\nadded Romanian word list to "Resources" page`
  );
  const [update6, setUpdate6] = useState(
    "Added language switch RO/EN\nAdded more languages\nAdded language comparing functionality\nAdded tools section, with unique word extraction tool\nAdded languages list from database to resources page\nImproved general UI"
  );

  useEffect(() => {
    switch (language) {
      case "english":
        setCommonWords("COMMON WORDS");
        setExplore("Explore");
        setCompareLanguages("Compare languages");
        setViewList("View list");
        setResources("resources");
        setAbout("about");
        setChangelog("changelog");
        setStartExploring("START EXPLORING");
        setLandingPageText(
          "Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"
        );
        //tools
        setTools("Tools");
        setTextScraper("UNIQUE WORDS IDENTIFIER");
        setGoBack("Go back");
        setExtractUniqueWords("Extract unique words");
        setClear("CLEAR");
        setUniqueWordsWillAppearHere("Unique words will appear here!");
        setInitialWords("Initial words");
        setUniqueWords("Unique words");
        setExtractTheUniqueWordsFromAnyText(
          "Extract the unique words from any text!"
        );
        //blend page
        setSelectTwoLanguages("Select two languages!");
        setWordsPerPage("Words per page");
        setWords("Words");
        setMinWordLength("Min. word length");
        setMaxWordLength("Max. word length");
        setWordMatch("Word Match (different letters)");
        //about page
        setFindTheCommonWordsOfLanguages("FIND THE COMMON WORDS OF LANGUAGES");
        setDeveloperAndCommunity("DEVELOPER & COMMUNITY");
        setGetInvolved("GET INVOLVED!");
        setContribuitors("CONTRIBUITORS:");
        setAppBuiltUsingMERN("THIS WEB APP WAS BUILT USING THE MERN STACK");
        //resources
        setLanguageWordList("Language word lists (all words)");
        //languages
        setEnglish("English");
        setFinnish("Finnish");
        setFrench("French");
        setGerman("German");
        setHungarian("Hungarian");
        setItalian("Italian");
        setPolish("Polish");
        setRomanian("Romanian");
        setSpanish("Spanish");
        setTurkish("Turkish");
        //ChangeLog
        setUpdate1("Project created");
        setUpdate2("Added basic language blending");
        setUpdate3(
          `Added Italian,French,Finnish languages\nEnhanced results page.\nadded ${"changelog"} section.\nadded country flags.\nadded dark/light theme switch`
        );
        setUpdate4(
          `Removed language lists from frontend side\nAdded about section\nRemoved light/dark theme switch\nEnhanced landing page UI\nUpdated versioning system to match web standards`
        );
        setUpdate5(
          `Connected to Backend App\nNow retreiving languages list from database\nAdded not-yet-functional table to "blend-page"\nadded Romanian word list to "Resources" page`
        );
        setUpdate6(
          "Added language switch RO/EN\nAdded more languages\nAdded language comparing functionality\nAdded tools section, with unique word extraction tool\nAdded languages list from database to resources page\nImproved general UI"
        );

        break;

      case "romanian":
        setCommonWords("CUVINTE COMUNE");
        setExplore("Explorează");
        setCompareLanguages("Compară");
        setViewList("Vezi lista");
        setResources("Resurse");
        setAbout("Despre");
        setChangelog("Istoric schimbari");
        setStartExploring("EXPLOREAZĂ");
        setLandingPageText(
          "Compară limba ta cu altă limbă! Găsește cuvintele comune, și alte statistici interesante despre limbi, complet gratuit!"
        );

        //tools
        setTools("Unelte");
        setTextScraper("IDENTIFICATOR CUVINTE UNICE");
        setGoBack("Înapoi");
        setExtractUniqueWords("Extrage cuvinte unice");
        setClear("ȘTERGE");
        setUniqueWordsWillAppearHere("Cuvintele unice vor apărea aici!");
        setInitialWords("Cuvinte inițiale");
        setUniqueWords("Cuvinte unice");
        setExtractTheUniqueWordsFromAnyText(
          "Extrage cuvintele unice din orice text!"
        );

        //blend page
        setSelectTwoLanguages("Selectează două limbi diferite!");
        setWordsPerPage("Cuvinte pe pagină");
        setWords("Cuvinte");
        setMinWordLength("Lungime minimă");
        setMaxWordLength("Lungime maximă");
        setWordMatch("Potrivire cuvinte (litere diferite)");
        //about page
        setFindTheCommonWordsOfLanguages(
          "GĂSEȘTE CUVINTELE COMUNE ALE LIMBILOR"
        );
        setDeveloperAndCommunity("DEZVOLTATOR & COMUNITATE");
        setGetInvolved("IMPLICĂ-TE!");
        setContribuitors("CONTRIBUITORI:");
        setAppBuiltUsingMERN(
          "ACEASTĂ APLICAȚIE WEB A FOST DEZVOLTATĂ FOLOSIND STACK-UL MERN"
        );
        //resources
        setLanguageWordList(
          "Listele de cuvinte ale limbilor (toate cuvintele)"
        );
        //languages
        setEnglish("Engleză");
        setFinnish("Finlandeză");
        setFrench("Franceză");
        setGerman("Germană");
        setHungarian("Maghiară");
        setItalian("Italiană");
        setPolish("Poloneză");
        setRomanian("Română");
        setSpanish("Spaniolă");
        setTurkish("Turcă");
        //changelog
        setUpdate1("Început proiect");
        setUpdate2("Adăugat algoritm de combinare a limbilor");
        setUpdate3(
          `Adăugat Italiană, Franceză, Finlandeză\nÎmbunătățit pagina de rezultate\nAdăugat secțiune de "istoric schimbări"\nAdăugat steaguri pentru țări\nAdăugat buton pentru temă light/dark`
        );
        setUpdate4(
          `Înlăturat listele de cuvinte din Frontend\nAdăugat secțiunea "despre"\nÎnlăturat butonul pentru temă light/dark\nÎmbunătățit UI-ul paginii de pornire\nUpdatat sistemul de versionare cu standardul web`
        );
        setUpdate5(
          `Conectat aplicația web la Backend\nListele de limbi acum sunt preluate dintr-o bază de date\nAdăugat tabel de cuvinte, încă nefuncțional\nAdăugat lista cuvintelor din limba română la pagina de resurse `
        );
        setUpdate6(
          `Adăugat funcția de schimbare de limbă\nAdăugat mai multe limbi\nAdăugat funcția de comparare a limbilor\nAdăugat secțiunea de unelte\nAdăugat unealta de extragere a cuvintelor unice\nAdăugat liste de limbi la pagina de resurse\nÎmbunătățit UI general`
        );

        break;
    }
  }, [language]);

  return {
    language,
    explore,
    compareLanguages,
    viewList,
    setLanguage,
    commonWords,
    resources,
    about,
    changelog,
    startExploring,
    landingPageText,
    //tools
    clear,
    uniqueWordsWillAppearHere,
    initialWords,
    uniqueWords,
    tools,
    textScraper,
    goBack,
    extractTheUniqueWordsFromAnyText,
    extractUniqueWords,
    //blend page
    selectTwoLanguages,
    wordsPerPage,
    words,
    minWordLength,
    maxWordLength,
    //about page
    findTheCommonWordsOfLanguages,
    developerAndCommunity,
    getInvolved,
    contribuitors,
    appBuiltUsingMERN,
    wordMatch,
    //resources
    languageWordList,
    //languages
    english,
    finnish,
    french,
    german,
    hungarian,
    italian,
    polish,
    romanian,
    spanish,
    turkish,
    //ChangeLog
    update1,
    update2,
    update3,
    update4,
    update5,
    update6,
  };
};
