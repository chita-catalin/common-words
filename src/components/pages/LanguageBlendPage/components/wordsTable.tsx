import { BlendContext, LanguageContext } from "../../../../App";
import { CircularProgress, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import ReadingImg from "../reading-side.png";
import Paper from "@mui/material/Paper";

import "../style.css";

export const WordsTable = () => {
  const blend = useContext(BlendContext);

  const {
    selectTwoLanguages,
    wordsPerPage,
    words,
    minWordLength,
    maxWordLength,
    wordMatch,
  } = useContext(LanguageContext);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(25);
  const [minLength, setMinLength] = useState<number>(4);
  const [maxLength, setMaxLength] = useState<number>(15);
  const [localFilteredList, setLocalFilteredList] = useState<string[]>([]);

  useEffect(() => {
    setLocalFilteredList(
      blend.blendedList.filter((word: string) => {
        if (word.length >= minLength && word.length <= maxLength) return true;
        else return false;
      })
    );
  }, [minLength, maxLength, blend.blendedList]);

  const navigate = (e: any) => {
    if (e.target.dataset.testid === "NavigateNextIcon") {
      setPage(page + 1);
      return;
    }
    if (e.target.dataset.testid === "NavigateBeforeIcon") {
      setPage(page - 1);
      return;
    }
    setPage(parseInt(e.target.outerText) - 1);
  };
  return (
    <>
      {blend.blendedList.length === 0 && !blend.loading && (
        <div id="placeholder-image-container">
          <img src={ReadingImg} style={{ width: "25%", marginTop: "30px " }} />
          <div style={{ fontSize: "30px", color: "#bfbfbf" }}>
            {selectTwoLanguages}
          </div>
        </div>
      )}
      {blend.loading && (
        <div style={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
          <CircularProgress
            style={{ fontSize: "60px", color: "#00ADB5", marginTop: "40px" }}
          />
        </div>
      )}
      {blend.blendedList.length > 0 && !blend.loading && (
        <>
          <div id="settings-container">
            <TextField
              style={{ margin: "0px 8px 0px 0px" }}
              label={wordsPerPage}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(parseInt(e.target.value));
              }}
            />

            <TextField
              style={{ margin: "0px 8px 0px 8px" }}
              id="outlined-number"
              label={minWordLength}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={minLength}
              onChange={(e) => {
                setMinLength(parseInt(e.target.value));
              }}
            />

            <TextField
              style={{ margin: "0px 8px 0px 8px" }}
              id="outlined-number"
              label={maxWordLength}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={maxLength}
              onChange={(e) => {
                setMaxLength(parseInt(e.target.value));
              }}
            />

            <TextField
              style={{ margin: "0px 0px 0px 8px",minWidth:"220px" }}
              id="outlined-number"
              label={wordMatch}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={blend.lettersToIgnore}
              onChange={(e) => {
                blend.setLettersToIgnore(parseInt(e.target.value));
              }}
            />
          </div>
          <div id="top-pagination">
            <Pagination
              count={Math.ceil(localFilteredList.length / itemsPerPage)}
              shape="rounded"
              onChange={navigate}
              page={page + 1}
            />
          </div>
          <Paper id="words-table-container">
            {blend.loading ? (
              <CircularProgress style={{ fontSize: "60px" }} />
            ) : (
              <>
                {blend.selectedLanguage1.length *
                  blend.selectedLanguage2.length ===
                  0 && (
                  <h3 style={{ color: "lightgrey" }}>
                    Select 2 languages to begin!
                  </h3>
                )}

                <div id="words-table-header">
                  <div className="first-column">
                    {localFilteredList.length} {words}
                  </div>
                  <div className="second-column">Link</div>
                  <div className="third-column">Link</div>
                </div>

                {localFilteredList.length > 0 &&
                  localFilteredList.map((word: string, index: number) => {
                    if (
                      index >= itemsPerPage * page &&
                      index <= itemsPerPage * (page + 1) - 1
                    )
                      return (
                        <div
                          key={`${word}${index}`}
                          className="blended-words-table-row"
                          style={{
                            backgroundColor: index % 2 === 1 ? "#EEEEEE" : "",
                          }}
                        >
                          <div className="first-column">{word}</div>

                          <div className="second-column">
                            <a
                              target="_blank"
                              href={`https://${blend.languageCode1}.wiktionary.org/wiki/${word}`}
                              style={{ color: "#00ADB5" }}
                            >
                              {blend.languageCode1}.wiktionary/{word}
                            </a>
                          </div>

                          <div className="third-column">
                            <a
                              target="_blank"
                              href={`https://${blend.languageCode2}.wiktionary.org/wiki/${word}`}
                              style={{ color: "#00ADB5" }}
                            >
                              {blend.languageCode2}.wiktionary/{word}
                            </a>
                          </div>
                        </div>
                      );
                  })}
              </>
            )}
          </Paper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <Pagination
              count={Math.ceil(localFilteredList.length / itemsPerPage)}
              shape="rounded"
              onChange={navigate}
              page={page + 1}
            />
          </div>
        </>
      )}
    </>
  );
};
