import { Chip } from "@mui/material";
import NavBar from "../../Layout/NavBar/NavBar";
import "./style.css";

const ChangeLog = () => {
  return (
    <div>
      <NavBar />
      <div id="changelog-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "40px",
          }}
        >
          <Chip label="V0.0.5 / 26.4.2022" className="changelog-chip" />
          <span> Connected to Backend App</span>
          <span> Now retreiving languages list from database</span>
          <span> Added not-yet-functional table to "blend-page"</span>
          <span> added Google Analytics script to begin monitoring</span>
          <span> added Romanian word list to "Resources" page </span>
          <span>
            added Google Ads for paying off the backend hosting
            <br /> (hope Github doesn't mind)
          </span>

          <Chip label="V0.0.4 / 16.4.2022" className="changelog-chip" />
          <span> Removed language lists from frontend side</span>
          <span> Added about section</span>
          <span> Removed light/dark theme switch</span>
          <span> Enhanced landing page UI</span>
          <span> Updated versioning system to match web standards </span>

          <Chip label="V0.3 / 29.12.2021" className="changelog-chip" />
          <span> Added Italian,French,Finnish languages</span>
          <span> Enhanced results page.</span>
          <span> added changelog section.</span>
          <span> added country flags.</span>
          <span> added dark/light theme switch</span>
          <Chip label="V0.2 / 10.12.2021" className="changelog-chip" />
          <span> Added basic language blending</span>
          <Chip label="V0.1 / 1.12.2021" className="changelog-chip" />
          <span> Project created.</span>
        </div>
      </div>
    </div>
  );
};

export default ChangeLog;
