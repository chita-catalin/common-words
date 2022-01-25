import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { LanguageBlendContext } from "..";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import WordListPaper from "./ResultPapers/WordListPaper";
import StatisticsPaper from "./ResultPapers/StatisticsPaper";
import NavBar from "../../../Layout/NavBar/NavBar";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultComponent = () => {
  const blend = useContext(LanguageBlendContext);

  return (
    <>
      {blend.blendedList.length ? (
        <div id="result-section">
          <NavBar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontFamily: "consolas", color: "white" }}>
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
              {">"} <u>RESULTS</u>
            </h1>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px",
                }}
              >
                <FormControl fullWidth>
                  <Select value={100} style={{ backgroundColor: "white" }}>
                    <MenuItem value={100}>100% match</MenuItem>
                    <MenuItem value={90}>90% match</MenuItem>
                    <MenuItem value={80}>80% match</MenuItem>
                    <MenuItem value={70}>70% match</MenuItem>
                    <MenuItem value={60}>60% match</MenuItem>
                    <MenuItem value={60}>50% match</MenuItem>
                    <MenuItem value={60}>40% match</MenuItem>
                    <MenuItem value={60}>30% match</MenuItem>
                    <MenuItem value={60}>20% match</MenuItem>
                    <MenuItem value={60}>10% match</MenuItem>
                    <MenuItem value={60}>below 10% match</MenuItem>
                  </Select>
                </FormControl>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <WordListPaper blend={blend} />
                  <StatisticsPaper blend={blend} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ResultComponent;
