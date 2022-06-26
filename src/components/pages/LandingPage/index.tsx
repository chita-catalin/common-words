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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
          <Button type="primary">{startExploring}</Button>
        </Card>
        <Card
          style={{
            margin: "12px",
            flexGrow: 1,
            backgroundColor: "#fafafa",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Statistic title="Languages" value={10} />
          english finnish french german hungarian italian polish romanian
          spanish turkish
        </Card>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "24px" }}>
        <Card
          style={{ margin: "12px", flexGrow: 1, backgroundColor: "#fafafa" }}
        >
          wow
        </Card>
        <Card
          style={{ margin: "12px", flexGrow: 1, backgroundColor: "#fafafa" }}
        >
          wow
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
