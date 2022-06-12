import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BlendContext } from "../../../App";

const MoreDetails = () => {
  const blend = React.useContext(BlendContext);
  const wordList = blend.blendedList;

  const [minLength, setMinLength] = React.useState(1);
  const [maxLength, setMaxLength] = React.useState(10);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{ fontFamily: "consolas", color: "white", marginTop: "30px" }}
        >
          <span
            onClick={() => {
              blend.setBlendedList([]);
              blend.setSelectedLanguage2("");
              blend.setSelectedLanguage1("");
            }}
            style={{ cursor: "pointer" }}
          >
            BLEND LANGUAGES
          </span>
          {">"}{" "}
          <Link
            to="/language-blend"
            style={{ color: "white", textDecoration: "none" }}
          >
            RESULTS
          </Link>
          {">"} <u>MORE DETAILS</u>
        </h1>
      </div>
      <div
        style={{
          padding: "10px",
          margin: "30px 0 30px 0",
          display: "flex",
        }}
      >
        {/*minimum word length*/}
        <div
          style={{ display: "flex", flexDirection: "column", margin: "5px" }}
        >
          <span style={{ color: "white", marginBottom: "5px" }}>
            minimum word length
          </span>
          <TextField
            placeholder=""
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={minLength}
            style={{ backgroundColor: "white", borderRadius: "4px" }}
            onChange={(e: any) => setMinLength(Number(e.target.value))}
          />
        </div>
        {/*maximum word length*/}
        <div
          style={{ display: "flex", flexDirection: "column", margin: "5px" }}
        >
          <span style={{ color: "white", marginBottom: "5px" }}>
            maximum word length
          </span>
          <TextField
            placeholder=""
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={maxLength}
            style={{ backgroundColor: "white", borderRadius: "4px" }}
            onChange={(e: any) => setMaxLength(Number(e.target.value))}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {wordList.map((el: any) =>
          el.word &&
          el.word.length >= minLength &&
          el.word.length <= maxLength ? (
            <div
              style={{
                margin: "10px",
                padding: "10px",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255,0.1)",
                color: "white",
              }}
            >
              {el.word}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default MoreDetails;
