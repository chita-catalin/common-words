import { Alert, Autocomplete, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { LanguageBlendContext } from "./";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Flag from "react-world-flags";
import NavBar from "../../Layout/NavBar/NavBar";

const BlendComponent = () => {
  const blend = useContext(LanguageBlendContext);

  return (
    <div id="blend-section">
      <NavBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "cenetr",
          }}
        >
          <Flag
            code={blend.pickFlag(1)}
            style={{
              width: "50%",
              opacity: blend.selectedLanguage1 ? 0.6 : 0,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px",
            transition: "1s linear",
          }}
        >
          <h1 style={{ fontFamily: "consolas", color: "white" }}>
            BLEND LANGUAGES
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              minWidth: "281px",
            }}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={blend.languages}
              onChange={blend.handleSelect1}
              style={{
                borderRadius: "4px",
                margin: "10px",
                backgroundColor: "#FFF",
                flexGrow: 1,
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select language" />
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
                flexGrow: 1,
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select another language" />
              )}
            />
          </div>

          <Button
            variant="contained"
            disabled={
              blend.selectedLanguage1 === null ||
              blend.selectedLanguage2 === null
                ? true
                : false
            }
            onClick={blend.compare}
            style={{
              marginBottom: "30px",
              backgroundColor: "white",
              color: "#F84284",
              width: "261px",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <CompareArrowsIcon style={{ marginRight: "10px" }} />
              Compare
            </div>
          </Button>
        </div>

        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "cenetr",
          }}
        >
          <Flag
            code={blend.pickFlag(2)}
            style={{
              width: "50%",
              opacity: blend.selectedLanguage2 ? 0.6 : 0,
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {blend.alert && (
          <Alert
            style={{ marginTop: "20px", maxWidth: "400px" }}
            severity="error"
          >
            {blend.alert}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default BlendComponent;
