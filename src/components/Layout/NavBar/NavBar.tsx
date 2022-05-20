import LanguageIcon from "@mui/icons-material/Language";
import { MenuItem, Select } from "@mui/material";
import { LanguageContext } from "../../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

import "../style.css";

const NavBar = () => {
  const { setLanguage, commonWords, resources, about, changelog, tools } =
    useContext(LanguageContext);

  return (
    <nav id="nav-bar">
      <div
        style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}
      >
        <div id="title">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontFamily: "consolas",
              color: "#222831",
              marginLeft: "8px",
            }}
          >
            {commonWords}
          </Link>
          <span id="version-number">V1.0.0</span>
        </div>

        <div>
          <Link to="/tools" className="first-small-nav">
            <u>{tools}</u>
          </Link>
          <Link to="/resources" className="small-nav">
            <u>{resources}</u>
          </Link>
          <Link to="/about" className="small-nav">
            <u>{about}</u>
          </Link>
          <Link to="/changelog" className="small-nav">
            <u>{changelog}</u>
          </Link>
        </div>
      </div>

      <div id="language-picker">
        <Select
          label="Age"
          onChange={(e) => setLanguage(e.target.value)}
          style={{ width: "100%", height: "40px" }}
          renderValue={(selected: any) => {
            return (
              <LanguageIcon
                style={{ color: "#00ADB5", marginBottom: "-3px" }}
              />
            );
          }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          defaultValue={""}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="romanian">Română</MenuItem>
        </Select>
      </div>
    </nav>
  );
};

export default NavBar;
