import { useEffect, useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState("english");

  const [explore, setExplore] = useState("Explore");
  const [compareLanguages, setCompareLanguages] = useState("Compare languages");
  const [viewList, setViewList] = useState("Download list (.txt)");

  const [commonWords, setCommonWords] = useState<string>("COMMON WORDS");
  const [resources, setResources] = useState("resources");
  const [about, setAbout] = useState("about");
  const [changelog, setChangelog] = useState("changelog");
  const [startExploring, setStartExploring] = useState("START EXPLORING");
  const [landingPageText, setLandingPageText] = useState(
    "Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"
  );

  //tools page
  const [copied, setCopied] = useState("Copied!");
  const [extractUniqueWords, setExtractUniqueWords] = useState(
    "Extract unique words"
  );
  const [copyAll, setCopyAll] = useState("Copy all");
  const [extract, setExtract] = useState("Extract");
  const [textLanguage, setTextLanguage] = useState("Text language");
  const [customCharacters, setCustomCharacters] = useState("Custom characters");
  const [allowAll, setAllowAll] = useState("Allow all");
  const [enterYourTextHere, setEnterYourTextHere] = useState(
    "Enter your text here..."
  );
  const [extractionTime, setExtractionTime] = useState("Extraction time");
  const [allWords, setAllWords] = useState("All words");
  const [characters, setCharacters] = useState("Characters");
  const [tools, setTools] = useState("tools");
  const [clear, setClear] = useState("Clear");
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
  const [mandarinChinese, setMandarinChinese] = useState("Mandarin Chinese");
  const [hindi, setHindi] = useState("Hindi");
  const [spanish, setSpanish] = useState("Spanish");
  const [french, setFrench] = useState("French");
  const [standardArabic, setStandardArabic] = useState("Standard Arabic");
  const [bengali, setBengali] = useState("Bengali");
  const [dutch, setDutch] = useState("Dutch");
  const [ukrainian, setUkrainian] = useState("Ukrainian");

  const [finnish, setFinnish] = useState("Finnish");
  const [german, setGerman] = useState("German");
  const [hungarian, setHungarian] = useState("Hungarian");
  const [italian, setItalian] = useState("Italian");
  const [polish, setPolish] = useState("Polish");
  const [romanian, setRomanian] = useState("Romanian");
  const [turkish, setTurkish] = useState("Turkish");

  //                 const[Russian – 258M
  //           const[Portuguese – 252.2M
  //             const[Indonesian – 199M
  //               const[Urdu – 170.6M
  //                 const[Standard German – 131.6M
  //                   const[Japanese – 126.4M
  //                     const[Swahili – 98.5M
  //                       const[Marathi – 95.3M
  //                         const[Telugu – 93M
  //                           const[Turkish – 85.2M
  //                             const[Yue Chinese – 84.9M
  //                               const[Tamil – 83.8M
  //                                 const[Western Punjabi – 82.8M
  //                                   const[Wu Chinese – 81.8M
  //                                     const[Korean – 79.4M
  //                                       const[Vietnamese -77M
  //                                         const[Hausa – 72.7M
  //                                           const[Javanese – 68.3M
  //                                             const[Egyptian Arabic – 67.8M
  //                                               const[Italian – 67.7M
  //                                                 const[Thai – 60.7M
  //                                                   const[Gujarati – 60.7M
  //                                                     const[Kannada – 56.5M
  //                                                       const[Persian – 55M
  //                                                         const[Bhojpuri – 52.4M
  //                                                           const[Polish – 50M
  //                                                             const[Southern Min – 48.5M
  //                                                               const[Hakka – 47.8M
  //                                                                 const[Filipino – 45M
  //                                                                   const[Pashto – 40M
  //                                                                     const[Ukranian – 40M
  //                                                                       const[Yoruba – 40M
  //                                                                         const[Malayalam – 37.7M
  //                                                                           const[Xiang Chinese – 36M
  //                                                                             const[Odia – 35M
  //                                                                               const[Maithili – 35M
  //                                                                                 const[Sudanese Arabic– 33M
  //                                                                                   const[Burmese – 32M
  //                                                                                     const[Oromo – 30M
  //                                                                                       const[Uzbek – 27M
  //                                                                                         const[Romanian – 26M
  //                                                                                           const[Sindhi – 25M
  //                                                                                             const[Tagalog – 23.8M
  // //ChangeLog
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
        setViewList("Download list (.txt)");
        setResources("resources");
        setAbout("about");
        setChangelog("changelog");
        setStartExploring("START EXPLORING");
        setLandingPageText(
          "Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"
        );
        //tools
        setCopied("Copied!");
        setCopyAll("Copy all");
        setExtractUniqueWords("Extract unique words");
        setExtract("Extract");
        setTextLanguage("Text language");
        setCustomCharacters("Custom characters");
        setAllowAll("Allow all");
        setEnterYourTextHere("Enter your text here...");
        setExtractionTime("Extraction time");
        setAllWords("All words");
        setCharacters("Characters");
        setTools("Tools");
        setClear("Clear");
        setInitialWords("Initial words");
        setUniqueWords("Unique words");
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
        setUkrainian("Ukrainian");
        setDutch("Dutch");
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
        setViewList("Descarcă lista (.txt)");
        setResources("Resurse");
        setAbout("Despre");
        setChangelog("Istoric schimbari");
        setStartExploring("EXPLOREAZĂ");
        setLandingPageText(
          "Compară limba ta cu altă limbă! Găsește cuvintele comune, și alte statistici interesante despre limbi, complet gratuit!"
        );

        //tools
        setCopied("Copiat!");
        setCopyAll("Copiază tot");
        setExtractUniqueWords("Extrage cuvinte unice");
        setExtract("Extrage");
        setTextLanguage("Limba textului");
        setCustomCharacters("Permite doar caracterele următoare");
        setAllowAll("Permite tot");
        setEnterYourTextHere("Introdu textul aici...");
        setExtractionTime("Durată extragere");
        setAllWords("Cuvinte totale");
        setCharacters("Caractere");
        setTools("Unelte");
        setClear("Șterge");
        setInitialWords("Cuvinte inițiale");
        setUniqueWords("Cuvinte unice");
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
        setUkrainian("Ucraineană");
        setDutch("Neerlandeză");
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
    copied,
    copyAll,
    allWords,
    extractionTime,
    extract,
    textLanguage,
    customCharacters,
    allowAll,
    enterYourTextHere,
    extractUniqueWords,
    characters,
    clear,
    initialWords,
    uniqueWords,
    tools,
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
    ukrainian,
    dutch,
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
