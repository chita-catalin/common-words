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
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline" }}>
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
        </div>
        <span
          style={{
            fontSize: "13px",
            marginRight: "30px",
            color: "#393E46",
            marginLeft: "3px",
          }}
        >
          V0.5.0
        </span>
        <Link
          to="/tools"
          style={{
            marginRight: "30px",
            textDecoration: "none",
            color: "#00ADB5",
          }}
        >
          <u>{tools}</u>
        </Link>
        <Link
          to="/resources"
          style={{
            marginRight: "30px",
            textDecoration: "none",
            color: "#00ADB5",
          }}
        >
          <u>{resources}</u>
        </Link>
        <Link
          to="/about"
          style={{
            marginRight: "30px",
            textDecoration: "none",
            color: "#00ADB5",
          }}
        >
          <u>{about}</u>
        </Link>
        <Link
          to="/changelog"
          style={{
            marginRight: "30px",
            textDecoration: "none",
            color: "#00ADB5",
          }}
        >
          <u>{changelog}</u>
        </Link>
      </div>
      <Select
        label="Age"
        onChange={(e) => setLanguage(e.target.value)}
        style={{ width: "70px", margin: "0 32px 0px 0px", height: "40px" }}
        renderValue={(selected: any) => {
          return (
            <LanguageIcon style={{ color: "#00ADB5", marginBottom: "-3px" }} />
          );
        }}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        defaultValue={""}
      >
        <MenuItem value="english">English</MenuItem>
        <MenuItem value="romanian">Română</MenuItem>
      </Select>
    </nav>
  );
};

export default NavBar;
