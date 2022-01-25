import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BlendContext } from "../../../App";
import NavBar from "../../Layout/NavBar/NavBar";

const MoreDetails = () => {
  const blend = React.useContext(BlendContext);
  const wordList = blend.blendedList;

  const [minLength, setMinLength] = React.useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
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
          backgroundColor: "#FFF",
          margin: "30px 0 30px 0",
        }}
      >
        <TextField
          label="minimum word length"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={minLength}
          onChange={(e: any) => setMinLength(Number(e.target.value))}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {wordList.map((el: any) =>
          el.word && el.word.length >= minLength ? (
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
