import {
  Alert,
  Autocomplete,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { LanguageBlendContext } from "./";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { ThemeContext } from "../../../App";
import Flag from "react-world-flags";

const BlendComponent = () => {
  const blend = useContext(LanguageBlendContext);
  const theme = useContext(ThemeContext);

  return (
    <div
      id="blend-section"
      style={{
        backgroundColor: theme.light ? "#fff" : "#121212",
        color: !theme.light ? "#fff" : "#121212",
        minHeight: "100vh",
      }}
    >
      <div id="blend-container">
        <Typography
          style={{
            fontSize: theme.width > theme.mobileBreakpoint ? "3.58rem" : "1rem",
            fontWeight: 100,
          }}
        >
          COMMON WORDS
          <span style={{ fontSize: "1rem", fontWeight: 300 }}>V0.3(alpha)</span>
        </Typography>

        <div
          style={{
            display: "flex",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={blend.languages}
            onChange={blend.handleSelect1}
            sx={{ width: theme.width > theme.mobileBreakpoint ? 300 : 250 }}
            style={{
              borderRadius: "4px",
              margin: "10px",
              backgroundColor: "#fff",
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select language" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={blend.languages}
            onChange={blend.handleSelect2}
            style={{
              borderRadius: "4px",
              margin: "10px",
              backgroundColor: "#fff",
            }}
            sx={{ width: theme.width > theme.mobileBreakpoint ? 300 : 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Select another language" />
            )}
          />
        </div>
        <div style={{ display: "flex" }}>
          {blend.selectedLanguage1 && (
            <Flag
              code={blend.pickFlag(1)}
              height="36"
              style={{
                borderRadius: "4px",
                marginRight: "10px",
                boxShadow: "0px 0px 2px grey",
              }}
            />
          )}

          <Button
            variant="contained"
            disabled={
              blend.selectedLanguage1 === null ||
              blend.selectedLanguage2 === null
                ? true
                : false
            }
            onClick={blend.compare}
            style={{ marginBottom: "5px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <CompareArrowsIcon style={{ marginRight: "10px" }} /> Compare
            </div>
          </Button>
          {blend.selectedLanguage2 && (
            <Flag
              code={blend.pickFlag(2)}
              height="36"
              style={{
                borderRadius: "4px",
                marginLeft: "10px",
                boxShadow: "0px 0px 2px grey",
              }}
            />
          )}
        </div>

        {blend.alert && (
          <Alert style={{ marginTop: "20px" }} severity="error">
            {blend.alert}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default BlendComponent;
