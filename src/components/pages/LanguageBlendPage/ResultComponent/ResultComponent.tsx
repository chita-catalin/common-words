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

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultComponent = () => {
  const blend = useContext(LanguageBlendContext);

  return (
    <>
      {blend.blendedList.length ? (
        <div id="result-section">
          <Typography style={{ fontSize: "3.58rem", fontWeight: 100 }}>
            RESULTS:
          </Typography>
          <Button
            onClick={() => {
              blend.setBlendedList([]);
              blend.setSelectedLanguage2("");
              blend.setSelectedLanguage1("");
            }}
          >
            <b>&larr; &nbsp;</b> Back to blending
          </Button>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel style={{ backgroundColor: "white" }}>
                  common words
                </InputLabel>
                <Select value={100}>
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
          <br />
        </div>
      ) : null}
    </>
  );
};

export default ResultComponent;
