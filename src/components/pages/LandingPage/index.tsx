import "./style.css";
import { Button } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRef } from "react";
import React from "react";
//@ts-ignore
import GLOBE from "vanta/dist/vanta.globe.min";
import { Link } from "react-router-dom";
import NavBar from "../../Layout/NavBar/NavBar";
import { BlendContext } from "../../../App";

const LandingPage = () => {
  const [vantaEffect, setVantaEffect] = React.useState<any>(0);
  const myRef = useRef(null);
  const blend = React.useContext(BlendContext);

  React.useEffect(() => {
    //clear blending history
    blend.selectedLanguage1 = null;
    blend.selectedLanguage2 = null;
    blend.blendedList = [];

    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
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
            color: "white",
            width: "370px",
            marginBottom: "30px",
          }}
        >
          Compare your language with another! Find the common words, and more
          fun statistics about languages, completely free!
        </p>
        <Link
          to="/language-blend"
          style={{ textDecoration: "none", color: "#F84284" }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FFF",
              color: "#F84284",
            }}
          >
            Start Exploring
            <ArrowForwardIosRoundedIcon
              style={{ fontSize: "16px", color: "#F84284" }}
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
          color: "lightgrey",
        }}
      >
        vanta.js
      </a>
    </div>
  );
};

export default LandingPage;
