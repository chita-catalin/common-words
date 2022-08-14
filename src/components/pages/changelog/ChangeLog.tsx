import { LanguageContext } from "../../../App";
import { useContext } from "react";
import { Card } from "antd";

import "./style.css";

const ChangeLog = () => {
  const { update1, update2, update3, update4, update5, update6 } =
    useContext(LanguageContext);

  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      <div id="changelog-container">
        <div id="changelog-sub-container">
          <Card
            headStyle={{ color: "white" }}
            title="V1.0.0 / -"
            style={{
              margin: "12px",
              backgroundColor: "#393E46",
              color: "white",
            }}
          ></Card>
          <Card
            headStyle={{ color: "white" }}
            title="V0.5.0 / 17.5.2022"
            style={{
              margin: "12px",
              backgroundColor: "#393E46",
              color: "white",
            }}
          >
            {update6.split(".").join("\n")}
          </Card>
          <Card
            headStyle={{ color: "white" }}
            title="V0.0.5 / 26.4.2022"
            style={{
              margin: "12px",
              backgroundColor: "#393E46",
              color: "white",
            }}
          >
            {update5.split(".").join("\n")}
          </Card>
          <Card
            headStyle={{ color: "white" }}
            title="V0.0.4 / 16.4.2022"
            style={{
              margin: "12px",
              backgroundColor: "#393E46",
              color: "white",
            }}
          >
            <div>{update4.split(".").join("\n")}</div>
          </Card>
          <Card
            headStyle={{ color: "white" }}
            title="V0.3 / 29.12.2021"
            style={{
              margin: "12px",
              backgroundColor: "#393E46",
              color: "white",
            }}
          >
            {update3.split(".").join("\n")}
          </Card>
          <Card
            headStyle={{ color: "white" }}
            title="V0.2 / 10.12.2021"
            style={{
              margin: "12px",
              backgroundColor: "#393E46",
              color: "white",
            }}
          >
            {update2.split(".").join("\n")}
          </Card>
          <Card
            headStyle={{ color: "white" }}
            title="V0.1 / 1.12.2021"
            style={{
              margin: "12px",
              backgroundColor: "#393E46",
              color: "white",
            }}
          >
            {update1.split(".").join("\n")}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChangeLog;
