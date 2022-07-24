import { LanguageContext } from "../../../App";
import { Button, Select } from "antd";
import { useContext, useState } from "react";

import "./style.css";

const Tools = () => {
  const language = useContext(LanguageContext);
  const [allowedChars, setAllowedChars] = useState(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );

  return (
    <div id="tools-container" style={{ position: "relative" }}>
      {/* <Link to="/tools/text-scraper" style={{ textDecoration: "none" }}>
        <Button type="primary">{textScraper}</Button>
      </Link>
      <Divider style={{ marginTop: "10px" }} /> */}
      <textarea
        placeholder="Enter your text here..."
        rows={1000}
        style={{
          backgroundColor: "transparent",
          color: "white",
          height: "100%",
          border: "none",
          outline: "none",
        }}
      ></textarea>
      <Select
        style={{ position: "absolute", right: "24px", top: 0, width: "100px" }}
      >
        <Select.Option>{language.romanian}</Select.Option>
        <Select.Option>{language.english}</Select.Option>
      </Select>

      <Button
        style={{
          width: "100px",
          alignSelf: "center",
          position: "absolute",
          bottom: "12px",
          backgroundColor: "#fa8c16",
          outline: "none",
          border: "none",
        }}
        type="primary"
      >
        Extract
      </Button>

      {/*Allowed characters*/}
      <div
        style={{
          position: "absolute",
          top: "48px",
          right: "24px",
          width: "100px",
          minHeight: "10px",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "2px",
          overflow: "hidden",
        }}
      >
        {allowedChars.split("").map((char: string) => {
          return (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {" "}
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
