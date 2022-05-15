import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import NavBar from "../../Layout/NavBar/NavBar";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

import "./style.css";

const Tools = () => {
  return (
    <>
      <NavBar />
      <div id="tools-container">
        <Link to="/tools/text-scraper" style={{ textDecoration: "none" }}>
          <Paper elevation={3} className="tool-paper">
            <div className="tool-paper-title">TEXT SCRAPER</div>
            <DocumentScannerRoundedIcon style={{ fontSize: "50px" }} />
          </Paper>
        </Link>

        <Paper elevation={3} className="tool-paper">
          <div className="tool-paper-title">COMPARE YOUR OWN LISTS</div>
          <div style={{ display: "flex" }}>
            <ListAltRoundedIcon style={{ fontSize: "50px" }} />
            <CompareArrowsRoundedIcon style={{ fontSize: "50px" }} />
            <ListAltRoundedIcon style={{ fontSize: "50px" }} />
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Tools;
