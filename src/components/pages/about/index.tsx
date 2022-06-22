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
        <h1>{findTheCommonWordsOfLanguages}</h1>
        <div
          style={{
            display: "flex",
            color: "grey",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "grey",
              display: "flex",
              flexDirection: "column",
              border: "1px solid lightgrey",
              padding: "8px",
            }}
          >
            <span style={{ color: "#2f54eb" }}>ABC</span> PVBF AUX{" "}
            <span style={{ color: "#2f54eb" }}>DEF</span> IQYE
          </div>

          <SwapOutlined
            style={{ fontSize: "2rem", margin: "0px 10px 0px 10px" }}
          />

          <div
            style={{
              color: "grey",
              display: "flex",
              flexDirection: "column",
              border: "1px solid lightgrey",
              padding: "8px",
            }}
          >
            OQUE <span style={{ color: "#2f54eb" }}>ABC</span> KIYW JSU{" "}
            <span style={{ color: "#2f54eb" }}>DEF</span>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArrowRightOutlined
              style={{ fontSize: "2rem", color: "grey", marginLeft: "10px" }}
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
                color: "#2f54eb",
                marginLeft: "7px",
                border: "1px solid lightgrey",
                padding: "8px",
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
        <h1>{appBuiltUsingMERN}</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="technology-container">
            <a href="https://www.mongodb.com/" style={{ color: "#2f54eb" }}>
              mongoDB
            </a>
            <DatabaseOutlined
              style={{ fontSize: "3rem", color: "grey", marginTop: "8px" }}
            />
          </div>

          <div className="technology-container">
            <a href="https://nodejs.dev/" style={{ color: "#2f54eb" }}>
              Node
            </a>
            <CloudServerOutlined
              style={{ fontSize: "3rem", color: "grey", marginTop: "8px" }}
            />
          </div>

          <div className="technology-container">
            <a href="https://expressjs.com/" style={{ color: "#2f54eb" }}>
              Express
            </a>
            <ToolOutlined
              style={{ fontSize: "3rem", color: "grey", marginTop: "8px" }}
            />
          </div>

          <div className="technology-container">
            <a href="https://reactjs.org/" style={{ color: "#2f54eb" }}>
              React
            </a>
            <AntDesignOutlined
              style={{ fontSize: "3rem", color: "grey", marginTop: "8px" }}
            />
          </div>
        </div>
      </Card>

      <Card id="developer-and-community-container">
        <h1>{developerAndCommunity}</h1>

        <div style={{ display: "flex", alignItems: "center" }}>
          <MailOutlined
            style={{ fontSize: "1.5rem", color: "grey", marginRight: "10px" }}
          />
          <div style={{ color: "#2f54eb" }}>chita.catalin.adrian@gmail.com</div>
        </div>

        <h2 style={{ fontWeight: 100 }}>{getInvolved}</h2>

        <div style={{ display: "flex", alignItems: "center" }}>
          <GithubOutlined
            style={{ fontSize: "1.5rem", color: "grey", marginRight: "10px" }}
          />
          <div style={{ color: "#2f54eb" }}>
            github.com/chita-catalin/common-words{" "}
          </div>
        </div>

        <h2 style={{ fontWeight: 100 }}>{contribuitors}</h2>
        <a href="https://github.com/chita-catalin" style={{ color: "#2f54eb" }}>
          chita-catalin
        </a>
      </Card>
    </div>
  );
};
