import { Chip } from "@mui/material";
import NavBar from "../../Layout/NavBar/NavBar";
import "./style.css";

const ChangeLog = () => {
  return (
    <div style={{ color: "#FFF" }}>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "40px",
          }}
        >
          <Chip
            label="V0.3 / 29.12.2021"
            className="changelog-chip"
            style={{ backgroundColor: "lightgrey" }}
          />
          <span> Added Italian,French,Finnish languages</span>
          <span> Enhanced results page.</span>
          <span> added changelog section.</span>
          <span> added country flags.</span>
          <span> added dark/light theme switch</span>

          <Chip
            label="V0.2 / 10.12.2021"
            className="changelog-chip"
            style={{ backgroundColor: "lightgrey" }}
          />
          <span> Added basic language blending</span>

          <Chip
            label="V0.1 / 1.12.2021"
            className="changelog-chip"
            style={{ backgroundColor: "lightgrey" }}
          />
          <span> Project created.</span>
        </div>
      </div>
    </div>
  );
};

export default ChangeLog;
