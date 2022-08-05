import { Button, Checkbox, Progress, Select, notification } from "antd";
import { LanguageContext } from "../../../App";
import { useContext, useState } from "react";

import "./style.css";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const Tools = () => {
  const language = useContext(LanguageContext);

  const [selectValue, setSelectValue] = useState<string>("English");
  const [text, setText] = useState<string>("");
  const [scrapedText, setScrapedText] = useState<string[]>([]);
  const [allowAll, setAllowAll] = useState<boolean>(false);

  const [customCharacters, setCustomCharacters] = useState<boolean>(false);
  const [customCharactersString, setCustomCharactersString] =
    useState<string>("");

  const [controlsCollapsed, setControlsCollapsed] = useState<boolean>(false);
  const [statisticsCollapsed, setStatisticsCollapsed] =
    useState<boolean>(false);

  const [allowedChars, setAllowedChars] = useState(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );

  const [allWordsCount, setAllWordsCount] = useState<number>(0);
  const [uniqueWordsCount, setUniqueWordsCount] = useState<number>(0);
  const [extractionTime, setExtractionTime] = useState<number>(0);

  const scrape = () => {
    let t0 = performance.now();

    let arr: string[] = [];

    if (allowAll) {
      arr = text.replace(/\r/g, " ").split(" ");
    } else if (customCharacters) {
      //arr is text with all characters other than cusom, turned to spaces
      for (let i = 0; i < text.length; i++) {
        if (customCharactersString.includes(text[i])) arr[i] = text[i];
        else arr[i] = " ";
      }
      let aux: string = arr.join("");
      arr = aux.replace(/\r/g, " ").split(" ");
    } else {
      //custom language for sure
      for (let i = 0; i < text.length; i++) {
        if (allowedChars.includes(text[i])) arr[i] = text[i];
        else arr[i] = " ";
      }
      let aux: string = arr.join("");
      arr = aux.replace(/\r/g, " ").split(" ");
    }

    arr = arr.map((word: string) => word.toLowerCase());
    setAllWordsCount(arr.length);

    arr = Object.keys(
      arr.reduce((reducer: any, word: any) => {
        reducer[word] = true;
        return reducer;
      }, {})
    );

    arr.sort();

    setScrapedText(arr);
    setUniqueWordsCount(arr.length);

    var t1 = performance.now();
    setExtractionTime(t1 - t0);
  };

  const copy = () => {
    window.navigator.clipboard.writeText(scrapedText.join("\n"));
    notification.open({
      message: language.copied,
      placement: "bottomRight",
    });
  };

  return (
    <div id="tools-container" style={{ position: "relative" }}>
      {scrapedText.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}
        >
          {scrapedText.map((word: string) => {
            return <span style={{ margin: "2px" }}>{word}</span>;
          })}
        </div>
      ) : (
        <textarea
          value={text}
          placeholder={language.enterYourTextHere}
          rows={1000}
          id="text-area"
          onChange={(e: any) => setText(e.target.value)}
        ></textarea>
      )}

      <Button
        id="main-action-button"
        type="primary"
        onClick={() => {
          if (scrapedText.length > 0) copy();
          else {
            scrape();
          }
        }}
      >
        {scrapedText.length > 0 ? language.copyAll : language.extract}
      </Button>

      <Button
        id="clear-button"
        onClick={() => {
          setText("");
          setScrapedText([]);
        }}
      >
        {language.clear}
      </Button>

      {/*Allowed characters*/}

      {controlsCollapsed ? (
        <PlusSquareOutlined
          className="fixed-controls-collapse"
          onClick={() => setControlsCollapsed(false)}
        />
      ) : (
        <MinusSquareOutlined
          className="fixed-controls-collapse"
          onClick={() => setControlsCollapsed(true)}
        />
      )}
      {scrapedText.length > 0 ? (
        <>
          {statisticsCollapsed ? (
            <PlusSquareOutlined
              className="fixed-statistics-collapse"
              onClick={() => setStatisticsCollapsed(false)}
            />
          ) : (
            <MinusSquareOutlined
              className="fixed-statistics-collapse"
              onClick={() => setStatisticsCollapsed(true)}
            />
          )}
        </>
      ) : null}

      {scrapedText.length > 0 && (
        <div
          id="fixed-statistics-container"
          style={{ display: statisticsCollapsed ? "none" : "" }}
        >
          <div style={{ margin: "4px 6px 0px 6px" }}>
            {language.extractionTime}:
          </div>
          <div style={{ margin: "0px 6px 2px 6px", fontWeight: "bold" }}>
            <Progress
              strokeColor={{
                "0%": "#00ADB5",
                "100%": "#00ADB5",
              }}
              percent={(extractionTime * 100) / 1000}
              size="small"
              width={20}
              format={() => ""}
              className="white-text"
            />
            {extractionTime.toFixed(1)} ms
          </div>

          <div style={{ margin: "4px 6px 0px 6px" }}>{language.allWords}:</div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "4px",
            }}
          >
            <Progress
              strokeColor={{
                "0%": "#EEEEEE",
                "100%": "#EEEEEE",
              }}
              width={80}
              type="circle"
              percent={100}
              format={() => allWordsCount.toString()}
              className="white-text"
            />
          </div>

          <div style={{ margin: "4px 6px 0px 6px" }}>
            {language.uniqueWords}:
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "4px",
            }}
          >
            <Progress
              strokeColor={{
                "0%": "#00ADB5",
                "100%": "#00ADB5",
              }}
              width={80}
              type="circle"
              percent={(uniqueWordsCount * 100) / allWordsCount}
              format={() =>
                uniqueWordsCount.toString() +
                ` (${((uniqueWordsCount * 100) / allWordsCount).toFixed(0)}%)`
              }
              trailColor="rgb(100,100,100)"
              className="blue-text"
            />
          </div>
        </div>
      )}

      <div
        id="fixed-controls-container"
        style={{ display: controlsCollapsed ? "none" : "" }}
      >
        <div
          style={{
            margin: "6px",
            borderBottom: "2px solid lightgrey",
            paddingBottom: "6px",
          }}
        >
          <Checkbox
            checked={allowAll}
            style={{ marginRight: "4px" }}
            onClick={() => {
              setAllowAll(!allowAll);
              setCustomCharacters(false);
            }}
          />
          {language.allowAll}
        </div>
        <div
          style={{
            margin: "0px 6px 6px 6px",
            borderBottom: "2px solid lightgrey",
            paddingBottom: "6px",
          }}
        >
          <div>
            <Checkbox
              checked={customCharacters}
              style={{ marginRight: "4px" }}
              onClick={() => {
                setCustomCharacters(!customCharacters);
                setAllowAll(false);
              }}
            />
            {language.customCharacters}
          </div>

          {customCharacters && (
            <TextArea
              rows={2}
              style={{ marginTop: "4px" }}
              onChange={(e: any) => {
                setCustomCharactersString(e.target.value);
              }}
            />
          )}
        </div>

        <div
          style={{
            margin: "0px 6px 0px 6px",
            fontWeight: "bold",
          }}
        >
          {language.textLanguage}:
        </div>

        <Select
          disabled={allowAll || customCharacters}
          value={selectValue}
          style={{
            borderRadius: "4px",
            margin: "6px 6px 10px 6px",
          }}
          onChange={(e: any) => {
            setSelectValue(e);
            console.log(e);
            switch (e) {
              case "Romanian":
                setAllowedChars(
                  "aăâbcdefghiîjklmnopqrsștțuvwxyzAĂÂBCDEFGHIÎJKLMNOPQRSȘTȚUVWXYZ"
                );
                break;

              case "English":
                setAllowedChars(
                  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                );
                break;

              case "German":
                setAllowedChars(
                  "abcdefghijklmnopqrstuvwxyzäöüßABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß"
                );
                break;
              case "Dutch":
                setAllowedChars(
                  "abcdefghiĳjklmnopqrstuvwxyzABCDEFGHIĲJKLMNOPQRSTUVWXYZ"
                );
                break;
              case "Ukrainian":
                setAllowedChars(
                  "АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЬьЮюЯя"
                );
                break;
            }
          }}
        >
          <Select.Option value="Dutch">{language.dutch}</Select.Option>
          <Select.Option value="English">{language.english}</Select.Option>
          <Select.Option value="German">{language.german}</Select.Option>
          <Select.Option value="Romanian">{language.romanian}</Select.Option>
          <Select.Option value="Ukrainian">{language.ukrainian}</Select.Option>
        </Select>

        {!allowAll && !customCharacters && (
          <div id="characters-count">
            {language.characters} ({allowedChars.length}):{" "}
          </div>
        )}

        {!allowAll && !customCharacters && (
          <div id="allowed-chars-container">
            {allowedChars.split("").map((char: string) => {
              return <span id="allowed-chars">{char}</span>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;
