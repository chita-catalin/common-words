import useTextScraper from "./components/useTextScraper";
import { Separators } from "./components/Separators";
import NavBar from "../../../Layout/NavBar/NavBar";
import TextInput from "./components/TextInput";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";

export const TextScraperContext = React.createContext<any>(null);

const TextScraper = () => {
  const textScraper = useTextScraper();
  const [extraSeparators, setExtraSeparators] = useState([]);

  useEffect(() => {
    let arr = [];
    let goodArr: string[] = [];
    for (let i = 0; i <= 10175; i++) {
      //get good characters
      if ((i >= 97 && i <= 122) || (i >= 65 && i <= 90)) {
        goodArr.push(String.fromCharCode(i));
      }
      // (i >= 256 && i <= 383) ||
      // (i >= 384 && i <= 591) ||
      // (i >= 688 && i <= 767) ||
      // (i >= 768 && i <= 879) ||
      // (i >= 880 && i <= 1023) ||
      // (i >= 1024 && i <= 1279) ||
      // (i >= 1280 && i <= 1327) ||
      // (i >= 8192 && i <= 8303) ||
      // (i >= 8352 && i <= 8399) ||
      // (i >= 8448 && i <= 8527) ||
      // (i >= 8592 && i <= 8703) ||
      // (i >= 8704 && i <= 8959) ||
      // (i >= 9472 && i <= 9599) ||
      // (i >= 9600 && i <= 9631) ||
      // (i >= 9632 && i <= 9727) ||
      // (i >= 9728 && i <= 9983) ||
      // (i >= 9984 && i <= 10175)

      arr.push(String.fromCharCode(i));
    }
    textScraper.setGoodCharacters(goodArr);
    textScraper.setUTF8Array(arr);
  }, []);

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
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 10px 50px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            to="/tools"
            style={{ alignSelf: "flex-start", textDecoration: "none" }}
          >
            <Button
              style={{
                color: "#00adb5",
                marginBottom: "10px",
              }}
            >
              {"< Go back"}
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
            <Button
              variant="contained"
              style={{ margin: "10px 0 10px 0", backgroundColor: "grey" }}
              onClick={clear}
            >
              CLEAR
            </Button>
            <Button
              variant="contained"
              style={{ margin: "10px 0 10px 0", backgroundColor: "#00adb5" }}
              onClick={scrape}
            >
              EXTRACT UNIQUE WORDS
            </Button>
          </div>
          <textarea
            rows={15}
            cols={60}
            name="description"
            placeholder="Unique words will appear here"
            value={textScraper.wordsArray.join("\n")}
            readOnly
          ></textarea>
        </div>
        {/* <div
          style={{
            backgroundColor: "white",
            margin: "20px 2px 20px 2px",
            padding: "10px",
            fontWeight: "bold",
            color: "#222831",
            borderRadius: "4px",
          }}
        >
          Select the characters to be ignored in the text ↓
        </div> */}
        {/* <Separators /> */}
      </div>
    </TextScraperContext.Provider>
  );
};

export default TextScraper;
