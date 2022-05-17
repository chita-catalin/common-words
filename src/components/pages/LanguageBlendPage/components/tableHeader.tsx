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
    <div id="table-header-container">
      {blend.languages.length > 0 && (
        <div id="table-header-inputs-container">
          <div id="first-input" style={{ flexGrow: 1 }}>
            <Select
              onChange={handleFirstLanguageChange}
              style={{ width: "100%" }}
              placeholder="select a language"
              defaultValue={""}
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
              defaultValue={""}
            >
              {blend.languages
                .sort((a: Language, b: Language) => {
                  if (a.name > b.name) return 1;
                  return -1;
                })
                .map((language: Language) => {
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
