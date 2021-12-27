import {
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useContext } from "react";
import { LanguageBlendContext } from "./";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultComponent = () => {
  const blend = useContext(LanguageBlendContext);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {blend.blendedList.length ? (
        <div id="result-section">
          <Typography style={{ fontSize: "3.58rem", fontWeight: 100 }}>
            RESULTS:
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "25px",
              }}
            >
              <p>
                <FormControl fullWidth>
                  <InputLabel style={{ backgroundColor: "white" }}>
                    common words
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={100}
                    // onChange={handleChange}
                  >
                    <MenuItem value={100}>100% match</MenuItem>
                    <MenuItem value={90}>90% match</MenuItem>
                    <MenuItem value={80}>80% match</MenuItem>
                    <MenuItem value={70}>70% match</MenuItem>
                    <MenuItem value={60}>60% match</MenuItem>
                    <MenuItem value={50}>50% match and below</MenuItem>
                  </Select>
                </FormControl>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {" "}
                <Paper
                  variant="elevation"
                  elevation={3}
                  className="statistics-card"
                  style={{
                    overflowY: "scroll",
                    height: "250px",
                    width: "250px",
                    margin: "10px",
                  }}
                >
                  <List component="div" disablePadding>
                    {blend.blendedList?.map((word: string) => {
                      return (
                        <ListItem sx={{ pl: 4 }}>
                          <ListItemText primary={word} />
                        </ListItem>
                      );
                    })}
                  </List>
                </Paper>
                <Paper
                  variant="elevation"
                  elevation={3}
                  className="statistics-card"
                  style={{ height: "250px", width: "250px", margin: "10px" }}
                >
                  <b>{blend.blendedList.length} words </b>
                </Paper>
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
