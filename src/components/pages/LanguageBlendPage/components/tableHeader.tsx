import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import BlenderIcon from "@mui/icons-material/Blender";
import { Language } from "../../../../types";
import { LanguageBlendContext } from "..";
import { useContext } from "react";

import "../style.css";

export const TableHeader = () => {
  const blend = useContext(LanguageBlendContext);

  return (
    <div id="language-blend-inputs-container">
      {blend.languages.length > 0 && (
        <>
          <div id="first-input">
            {/*first language input*/}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Language"
                // onChange={handleChange}
              >
                {blend.languages.map((language: Language) => {
                  return (
                    <MenuItem value={language.name} key={language._id}>
                      {language.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          <CompareArrowsIcon style={{ fontSize: "3rem", color: "grey" }} />
          {/*second language input*/}

          <div id="second-input">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Language"
                // onChange={handleChange}
              >
                {blend.languages.map((language: Language) => {
                  return (
                    <MenuItem value={language.name} key={language._id}>
                      {language.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#393E46",
              color: "#EEEEEE",
              width: "150px",
              marginLeft: "40px",
              alignSelf: "flex-end",
            }}
          >
            Blend <BlenderIcon style={{ marginLeft: "5px" }} />
          </Button>
        </>
      )}
    </div>
  );
};
