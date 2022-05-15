import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { MenuItem, Select } from "@mui/material";
import { Language } from "../../../../types";
import { LanguageBlendContext } from "..";
import { useContext } from "react";

import "../style.css";

export const TableHeader = () => {
  const blend = useContext(LanguageBlendContext);

  const handleFirstLanguageChange = (e: any) => {
    blend.getFirstLanguage(e.target.value);
  };

  const handleSecondLanguageChange = (e: any) => {
    blend.getSecondLanguage(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "30px 20% 20px 20%",
        justifyContent: "center",
      }}
    >
      {blend.languages.length > 0 && (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div id="first-input" style={{ flexGrow: 1 }}>
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

          <div id="second-input" style={{ flexGrow: 1 }}>
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
