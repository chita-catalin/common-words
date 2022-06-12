import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "./style.css";

const Tools = () => {
  return (
    <div id="tools-container">
      <Link to="/tools/text-scraper" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          style={{ fontSize: "16px", backgroundColor: "#393E46" }}
        >
          TEXT SCRAPER
          <ArrowForwardIosRoundedIcon
            style={{ fontSize: "18px", marginLeft: "2px" }}
          />
        </Button>
      </Link>
    </div>
  );
};

export default Tools;
