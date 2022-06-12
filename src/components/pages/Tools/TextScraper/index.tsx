import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import useTextScraper from "./components/useTextScraper";
import TextInput from "./components/TextInput";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Button, Paper } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const TextScraperContext = React.createContext<any>(null);

const TextScraper = () => {
  const textScraper = useTextScraper();
  const [extraSeparators, setExtraSeparators] = useState([]);
  const [initialNrOfWords, setInitialNrOfWords] = useState<number>(0);

  const statisticsRef: any = useRef(null);
  const executeScroll = () => statisticsRef.current.scrollIntoView();

  const scrape = () => {
    //split text into words
    let arr = textScraper.text
      .replace(/\r/g, " ")
      .split(
        /[ ■+#’‘%$=^†…„♦¬«»•¹²1234567890“*”.·:;?!~,`"&|()<>{}\[\]\r\n/\\]+/
      );
    //lowercase?
    arr = arr.map((word: string) => word.toLowerCase());

    setInitialNrOfWords(arr.length);

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

  const pieData = {
    labels: [
      `${initialNrOfWords} total words (100%)`,
      `${textScraper.wordsArray.length} unique words (${(
        (textScraper.wordsArray.length * 100) /
        initialNrOfWords
      ).toFixed(2)}%)`,
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [initialNrOfWords, textScraper.wordsArray.length],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <TextScraperContext.Provider value={textScraper}>
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

            {textScraper.wordsArray.length > 0 && (
              <Button
                variant="contained"
                style={{
                  margin: "10px 0 10px 0",
                  backgroundColor: "#FF2E63",
                }}
                onClick={executeScroll}
              >
                VIEW STATISTICS <ArrowDownwardOutlinedIcon />
              </Button>
            )}

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
            cols={100}
            name="description"
            placeholder="Unique words will appear here"
            value={textScraper.wordsArray.join("\n")}
            readOnly
          ></textarea>

          {textScraper.wordsArray.length > 0 && (
            <Paper
              ref={statisticsRef}
              style={{ width: "100%", marginTop: "30px", minHeight: "100px" }}
            >
              <div style={{ width: "45%", margin: "20px" }}>
                {" "}
                <Pie data={pieData} />
              </div>
            </Paper>
          )}
        </div>
      </div>
    </TextScraperContext.Provider>
  );
};

export default TextScraper;
