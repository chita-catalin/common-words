import { MenuItem, Select } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Language } from "../../../../types";
import { LanguageBlendContext } from "..";
import { useContext } from "react";

import "../style.css";

export const TableHeader = () => {
  const blend = useContext(LanguageBlendContext);

  const handleFirstLanguageChange = (e: any) => {
    console.log("dude", e.target.value);
    blend.getFirstLanguage(e.target.value);
  };

  const handleSecondLanguageChange = (e: any) => {
    console.log("dude", e.target.value);
    blend.getSecondLanguage(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "60px",
        marginBottom: "20px",
      }}
    >
      {blend.languages.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div id="first-input">
            {/*first language input*/}
            <Select
              onChange={handleFirstLanguageChange}
              style={{ width: "100%" }}
              placeholder="select a language"
            >
              {blend.languages.map((language: Language) => {
                return (
                  <MenuItem value={language.name} key={language._id}>
                    {language.name}
                  </MenuItem>
                );
              })}
            </Select>
          </div>

          <CompareArrowsIcon style={{ fontSize: "3rem", color: "grey" }} />
          {/*second language input*/}

          <div id="second-input">
            <Select
              placeholder="select another language"
              onChange={handleSecondLanguageChange}
              style={{ width: "100%" }}
            >
              {blend.languages.map((language: Language) => {
                return (
                  <MenuItem value={language.name} key={language._id}>
                    {language.name}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};
