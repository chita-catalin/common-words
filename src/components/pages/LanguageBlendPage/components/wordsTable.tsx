import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
import { BlendContext } from "../../../../App";
import Pagination from "@mui/material/Pagination";

export const WordsTable = () => {
  const blend = useContext(BlendContext);
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(25);

  const naicum = (ce: any) => {
    console.log(ce.target.outerText);
  };
  return (
    <>
      <Paper
        style={{
          display: "flex",
          overflow: "hidden",
          minHeight: "100px",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
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
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: index % 2 === 0 ? "#EEEEEE" : "",
                        height: "40px",
                      }}
                    >
                      <span style={{ marginLeft: "18px", textAlign: "left" }}>
                        {word}
                      </span>
                      <a
                        target="_blank"
                        href={`https://ro.wiktionary.org/wiki/${word}`}
                        style={{ color: "#00ADB5" }}
                      >
                        https://ro.wiktionary.org/wiki/{word}
                      </a>
                      <a
                        target="_blank"
                        href={`https://en.wiktionary.org/wiki/${word}`}
                        style={{ color: "#00ADB5" }}
                      >
                        https://ro.wiktionary.org/wiki/{word}
                      </a>
                    </div>
                  );
              })}
          </>
        )}
      </Paper>
      <Pagination
        count={10}
        shape="rounded"
        onChange={naicum}
        page={page + 1}
      />

      <button onClick={() => setPage(page - 1)}>{"<"}</button>
      <button onClick={() => setPage(page + 1)}>{">"}</button>
    </>
  );
};
