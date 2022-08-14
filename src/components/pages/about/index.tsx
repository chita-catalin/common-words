import { SwapOutlined } from "@ant-design/icons";
import { LanguageContext } from "../../../App";
import { useContext } from "react";
import { Card } from "antd";
import {
  ArrowRightOutlined,
  GithubOutlined,
  MailOutlined,
  DatabaseOutlined,
  ToolOutlined,
  AntDesignOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";

import "./style.css";

export const About = () => {
  const {
    findTheCommonWordsOfLanguages,
    appBuiltUsingMERN,
    developerAndCommunity,
    getInvolved,
    contribuitors,
  } = useContext(LanguageContext);

  return (
    <div id="about-page-container">
      <Card id="project-description-container">
        <h1 style={{ color: "white" }}>{findTheCommonWordsOfLanguages}</h1>
        <div
          style={{
            display: "flex",
            color: "#EEEEEE",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#EEEEEE",
              display: "flex",
              flexDirection: "column",
              border: "1px solid light#EEEEEE",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <span style={{ color: "#00ADB5" }}>ABC</span> PVBF AUX{" "}
            <span style={{ color: "#00ADB5" }}>DEF</span> IQYE
          </div>

          <SwapOutlined
            style={{ fontSize: "2rem", margin: "0px 10px 0px 10px" }}
          />

          <div
            style={{
              color: "#EEEEEE",
              display: "flex",
              flexDirection: "column",
              border: "1px solid light#EEEEEE",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            OQUE <span style={{ color: "#00ADB5" }}>ABC</span> KIYW JSU{" "}
            <span style={{ color: "#00ADB5" }}>DEF</span>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArrowRightOutlined
              style={{ fontSize: "2rem", color: "#EEEEEE", marginLeft: "10px" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#00ADB5",
                marginLeft: "7px",
                border: "1px solid light#EEEEEE",
                padding: "8px",
                borderRadius: "4px",
              }}
            >
              <span>ABC</span>
              <span>DEF</span>
            </div>
          </div>
        </div>
      </Card>
      {/*App made using mern stack*/}

      <Card id="mern-container">
        <h1 style={{ color: "white" }}>{appBuiltUsingMERN}</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="technology-container">
            <a href="https://www.mongodb.com/" style={{ color: "#00ADB5" }}>
              mongoDB
            </a>
            <DatabaseOutlined
              style={{ fontSize: "3rem", color: "#EEEEEE", marginTop: "8px" }}
            />
          </div>

          <div className="technology-container">
            <a href="https://nodejs.dev/" style={{ color: "#00ADB5" }}>
              Node
            </a>
            <CloudServerOutlined
              style={{ fontSize: "3rem", color: "#EEEEEE", marginTop: "8px" }}
            />
          </div>

          <div className="technology-container">
            <a href="https://expressjs.com/" style={{ color: "#00ADB5" }}>
              Express
            </a>
            <ToolOutlined
              style={{ fontSize: "3rem", color: "#EEEEEE", marginTop: "8px" }}
            />
          </div>

          <div className="technology-container">
            <a href="https://reactjs.org/" style={{ color: "#00ADB5" }}>
              React
            </a>
            <AntDesignOutlined
              style={{ fontSize: "3rem", color: "#EEEEEE", marginTop: "8px" }}
            />
          </div>
        </div>
      </Card>

      <Card id="developer-and-community-container">
        <h1 style={{ color: "white" }}>{developerAndCommunity}</h1>

        <div style={{ display: "flex", alignItems: "center" }}>
          <MailOutlined
            style={{
              fontSize: "1.5rem",
              color: "#EEEEEE",
              marginRight: "10px",
            }}
          />
          <div style={{ color: "#00ADB5" }}>chita.catalin.adrian@gmail.com</div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <GithubOutlined
            style={{
              fontSize: "1.5rem",
              color: "#EEEEEE",
              marginRight: "10px",
            }}
          />
          <div style={{ color: "#00ADB5" }}>
            github.com/chita-catalin/common-words{" "}
          </div>
        </div>

        <h1 style={{ color: "white", marginTop: "10px" }}>{contribuitors}</h1>
        <a href="https://github.com/chita-catalin" style={{ color: "#00ADB5" }}>
          chita-catalin
        </a>
      </Card>
    </div>
  );
};
