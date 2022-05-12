import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
import { BlendContext } from "../../../../App";
import Pagination from "@mui/material/Pagination";

export const WordsTable = () => {
  const blend = useContext(BlendContext);
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(25);

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Pagination
          count={Math.ceil(blend.blendedList.length / itemsPerPage)}
          shape="rounded"
          onChange={navigate}
          page={page + 1}
        />
      </div>
      <Paper
        style={{
          display: "flex",
          overflow: "hidden",
          minHeight: "100px",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
          margin: "0px 20% 0px 20%",
        }}
      >
        {blend.loading ? (
          <CircularProgress style={{ fontSize: "60px" }} />
        ) : (
          <>
            {blend.selectedLanguage1.length * blend.selectedLanguage2.length ===
              0 && (
              <h3 style={{ color: "lightgrey" }}>
                Select 2 languages to begin!
              </h3>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#00ADB5",
                height: "30px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  marginLeft: "18px",
                  flexGrow: 1,
                  width: "23%",
                }}
              >
                Word
              </div>
              <div
                style={{
                  width: "38%",
                  display: "flex",
                }}
              >
                Link
              </div>
              <div
                style={{
                  width: "38%",
                  display: "flex",
                }}
              >
                Link
              </div>
            </div>

            {blend.blendedList.length > 0 &&
              blend.blendedList.map((word: string, index: number) => {
                if (
                  index >= itemsPerPage * page &&
                  index <= itemsPerPage * (page + 1)
                )
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: index % 2 === 1 ? "#EEEEEE" : "",
                        height: "30px",
                      }}
                    >
                      <div
                        style={{
                          marginLeft: "18px",
                          textAlign: "left",
                          width: "23%",
                        }}
                      >
                        {word}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "38%",
                        }}
                      >
                        <a
                          target="_blank"
                          href={`https://ro.wiktionary.org/wiki/${word}`}
                          style={{ color: "#00ADB5" }}
                        >
                          ro.wiktionary.org/wiki/{word}
                        </a>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          width: "38%",
                        }}
                      >
                        <a
                          target="_blank"
                          href={`https://en.wiktionary.org/wiki/${word}`}
                          style={{ color: "#00ADB5" }}
                        >
                          en.wiktionary.org/wiki/{word}
                        </a>
                      </div>
                    </div>
                  );
              })}
          </>
        )}
      </Paper>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <Pagination
          count={Math.ceil(blend.blendedList.length / itemsPerPage)}
          shape="rounded"
          onChange={navigate}
          page={page + 1}
        />
      </div>
    </>
  );
};
