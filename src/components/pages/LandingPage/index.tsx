import "./style.css";
import { Button } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRef } from "react";
import React from "react";
//@ts-ignore
import GLOBE from "vanta/dist/vanta.globe.min";
import { Link } from "react-router-dom";
import NavBar from "../../Layout/NavBar/NavBar";
import { BlendContext, LanguageContext } from "../../../App";

const LandingPage = () => {
  const [vantaEffect, setVantaEffect] = React.useState<any>(0);
  const myRef = useRef(null);
  const blend = React.useContext(BlendContext);
  const { startExploring, landingPageText } = React.useContext(LanguageContext);

  React.useEffect(() => {
    //clear blending history
    blend.selectedLanguage1 = [];
    blend.selectedLanguage2 = [];
    blend.blendedList = [];

    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          color: 0x00adb5,
          color2: 0x222831,
          backgroundColor: 0xeeeeee,
          //and so on...
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div style={{ height: "100vh" }} ref={myRef} id="landing-page-container">
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
            }}
          >
            {startExploring}
            <ArrowForwardIosRoundedIcon
              style={{ fontSize: "16px", color: "#EEEEEE" }}
            />
          </Button>
        </Link>
      </div>
      <div id="right-section-container"></div>
      <a
        href="https://www.vantajs.com/"
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          textDecoration: "none",
          color: "#00ADB5",
        }}
      >
        vanta.js
      </a>
    </div>
  );
};

export default LandingPage;
