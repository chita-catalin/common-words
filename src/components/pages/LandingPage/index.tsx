import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { BlendContext, LanguageContext } from "../../../App";
import NavBar from "../../Layout/NavBar/NavBar";
import Doodle from "./FloatDoodle.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useRef } from "react";
import React from "react";

import "./style.css";

const LandingPage = () => {
  const myRef = useRef(null);
  const blend = React.useContext(BlendContext);
  const { startExploring, landingPageText } = React.useContext(LanguageContext);

  React.useEffect(() => {
    //clear blending history
    blend.selectedLanguage1 = [];
    blend.selectedLanguage2 = [];
    blend.blendedList = [];
  }, []);

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      ref={myRef}
      id="landing-page-container"
    >
      <NavBar />
      <div id="left-section-container">
        <p
          style={{
            fontFamily: "consolas",
            color: "#222831",
            width: "370px",
            marginBottom: "30px",
          }}
        >
          {landingPageText}
        </p>
        <Link
          to="/language-blend"
          style={{ textDecoration: "none", color: "#F84284" }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#393E46",
              color: "#EEEEEE",
              width: "180px",
            }}
          >
            {startExploring}
            <ArrowForwardIosRoundedIcon
              style={{ fontSize: "16px", color: "#EEEEEE" }}
            />
          </Button>
        </Link>
      </div>
      <div id="doodle-1">
        <img src={Doodle} id="doodle-img" />
      </div>
    </div>
  );
};

export default LandingPage;
