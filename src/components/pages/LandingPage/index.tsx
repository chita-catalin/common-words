import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { BlendContext, LanguageContext } from "../../../App";
import { useRef } from "react";
import { Card, Statistic, Button } from "antd";
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
    <div id="landing-page-container">
      <Card
        style={{
          margin: "12px",
          flexGrow: 1,
          maxWidth: "40%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#fafafa",
        }}
      >
        <div style={{ marginBottom: "10px" }}>{landingPageText}</div>
        <Button type="primary">
          {startExploring}
          <ArrowForwardIosRoundedIcon
            style={{ fontSize: "16px", color: "#EEEEEE" }}
          />
        </Button>
      </Card>
      <Card style={{ margin: "12px", flexGrow: 1, backgroundColor: "#f5f5f5" }}>
        <Statistic title="Languages" value={10} />
      </Card>
      <Card style={{ margin: "12px", flexGrow: 1, backgroundColor: "#f0f0f0" }}>
        wow
      </Card>
      <Card style={{ margin: "12px", flexGrow: 1, backgroundColor: "#d9d9d9" }}>
        wow
      </Card>

      {/* <div id="left-section-container">
        <p
          style={{
            fontFamily: "consolas",
            color: "#222831",
            width: "370px",
            marginBottom: "30px",
          }}
        >
          
        </p>
        <Link
          to="/language-blend"
          style={{ textDecoration: "none", color: "#F84284" }}
        >
          
        </Link>
      </div> */}
    </div>
  );
};

export default LandingPage;
