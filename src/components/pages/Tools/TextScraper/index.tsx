import NavBar from "../../../Layout/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useTextScraper from "./components/useTextScraper";
import React from "react";
import TextInput from "./components/TextInput";
import { Separators } from "./components/Separators";

export const TextScraperContext = React.createContext<any>(null);

const TextScraper = () => {
  const textScraper = useTextScraper();

  useEffect(() => {
    console.log("coaie");
    let arr = [];
    for (let i = 0; i <= 10175; i++) {
      arr.push(String.fromCharCode(i));
    }
    textScraper.setUTF8Array(arr);
  }, []);

  console.log("naicum");

  const scrape = () => {
    //split text into words
    let arr = textScraper.text
      .replace(/\r/g, " ")
      .split(
        /[ ■+#’‘%$=^†…„♦¬«»•¹²124567890“*”.·:;?!~,`"&|()<>{}\[\]\r\n/\\]+/
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
          ></textarea>
        </div>
        UTF-8
        <Separators />
      </div>
    </TextScraperContext.Provider>
  );
};

export default TextScraper;
