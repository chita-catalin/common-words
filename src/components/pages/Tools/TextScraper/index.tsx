import useTextScraper from "./components/useTextScraper";
import TextInput from "./components/TextInput";
import { Link } from "react-router-dom";
import React from "react";
import { Button } from "antd";

export const TextScraperContext = React.createContext<any>(null);

const TextScraper = () => {
  const textScraper = useTextScraper();

  const scrape = () => {
    //split text into words
    let arr = textScraper.text
      .replace(/\r/g, " ")
      .split(
        /[ ■+#’‘%$=^†…„♦¬«»•¹²1234567890“*”.·:;?!~,`"&|()<>{}\[\]\r\n/\\]+/
      );
    //lowercase?
    arr = arr.map((word: string) => word.toLowerCase());

    //remove duplicates
    arr = Object.keys(
      arr.reduce((reducer: any, word: any) => {
        reducer[word] = true;
        return reducer;
      }, {})
    );
    //sorting?
    arr.sort();

    textScraper.setWordsArray(arr);
    console.log(arr);
  };

  const clear = () => {
    console.log("wa", textScraper.textRef);
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
            <Button style={{ marginBottom: "10px" }}>{"< Go back"}</Button>
          </Link>
          <TextInput />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button style={{ margin: "10px 0 10px 0" }} onClick={clear}>
              CLEAR
            </Button>

            <Button
              type="primary"
              style={{ margin: "10px 0 10px 0" }}
              onClick={scrape}
            >
              EXTRACT UNIQUE WORDS
            </Button>
          </div>
          <textarea
            style={{ boxSizing: "border-box", width: "100%" }}
            rows={15}
            name="description"
            placeholder="Unique words will appear here"
            value={textScraper.wordsArray.join("\n")}
            readOnly
          ></textarea>
        </div>
      </div>
    </TextScraperContext.Provider>
  );
};

export default TextScraper;
