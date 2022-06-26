import useTextScraper from "./components/useTextScraper";
import TextInput from "./components/TextInput";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Button, Statistic } from "antd";
import { LanguageContext } from "../../../../App";

export const TextScraperContext = React.createContext<any>(null);

const TextScraper = () => {
  const textScraper = useTextScraper();

  const {
    clear,
    uniqueWordsWillAppearHere,
    initialWords,
    uniqueWords,
    goBack,
    extractUniqueWords,
  } = useContext(LanguageContext);

  const [initialWordsCount, setInitialWordsCount] = useState<number>(0);

  const scrape = () => {
    let arr = textScraper.text
      .replace(/\r/g, " ")
      .split(
        /[ ■+#’‘%$=^†…„♦¬«»•¹²1234567890“*”.·:;?!~,`"&|()<>{}\[\]\r\n/\\]+/
      );

    arr = arr.map((word: string) => word.toLowerCase());
    setInitialWordsCount(arr.length);

    arr = Object.keys(
      arr.reduce((reducer: any, word: any) => {
        reducer[word] = true;
        return reducer;
      }, {})
    );

    arr.sort();

    textScraper.setWordsArray(arr);
  };

  const clearText = () => {
    //@ts-ignore
    textScraper.textRef.current.value = "";
    textScraper.setText("");
    textScraper.setWordsArray([]);
  };

  return (
    <TextScraperContext.Provider value={textScraper}>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            to="/tools"
            style={{ alignSelf: "flex-start", textDecoration: "none" }}
          >
            <Button style={{ marginBottom: "10px" }}>
              {"< "}
              {goBack}
            </Button>
          </Link>
          <TextInput />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button style={{ margin: "10px 0 10px 0" }} onClick={clearText}>
              {clear}
            </Button>

            <Button
              type="primary"
              style={{ margin: "10px 0 10px 0" }}
              onClick={scrape}
            >
              {extractUniqueWords}
            </Button>
          </div>

          {/*statistics*/}
          {textScraper.wordsArray.length > 0 ? (
            <div
              style={{
                backgroundColor: "#fafafa",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
              }}
            >
              <Statistic
                title={initialWords}
                value={
                  textScraper.wordsArray[0] === ""
                    ? initialWordsCount - 1
                    : initialWordsCount
                }
              />
              <Statistic
                title={uniqueWords}
                value={
                  textScraper.wordsArray[0] === ""
                    ? textScraper.wordsArray.length - 1
                    : textScraper.wordsArray.length
                }
                suffix={` (${(
                  (textScraper.wordsArray.length * 100) /
                  initialWordsCount
                ).toFixed(2)})%
                `}
              />
            </div>
          ) : null}

          <textarea
            style={{ boxSizing: "border-box", width: "100%" }}
            rows={8}
            name="description"
            placeholder={uniqueWordsWillAppearHere}
            value={textScraper.wordsArray.join("\n")}
            readOnly
          ></textarea>
        </div>
      </div>
    </TextScraperContext.Provider>
  );
};

export default TextScraper;
