import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";
import ApiIcon from "@mui/icons-material/Api";
import { SwapOutlined } from "@ant-design/icons";
import "./style.css";
import { LanguageContext } from "../../../App";
import { useContext } from "react";
import { Card } from "antd";

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
            <span style={{ color: "#2f54eb", fontWeight: "bolder" }}>ABC</span>{" "}
            PVBF AUX{" "}
            <span style={{ color: "#2f54eb", fontWeight: "bolder" }}>DEF</span>{" "}
            IQYE
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
            OQUE{" "}
            <span style={{ color: "#2f54eb", fontWeight: "bolder" }}>ABC</span>{" "}
            KIYW JSU{" "}
            <span style={{ color: "#2f54eb", fontWeight: "bolder" }}>DEF</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ArrowDownwardIcon style={{ fontSize: "2rem", color: "grey" }} />
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
              fontWeight: "bolder",
              border: "1px solid lightgrey",
              padding: "8px",
            }}
          >
            <span>ABC</span>
            <span>DEF</span>
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
            <StorageIcon style={{ fontSize: "3rem", color: "grey" }} />
          </div>

          <div className="technology-container">
            <a href="https://nodejs.dev/" style={{ color: "#2f54eb" }}>
              Node
            </a>
            <ApiIcon style={{ fontSize: "3rem", color: "grey" }} />
          </div>

          <div className="technology-container">
            <a href="https://expressjs.com/" style={{ color: "#2f54eb" }}>
              Express
            </a>
            <ConstructionIcon style={{ fontSize: "3rem", color: "grey" }} />
          </div>

          <div className="technology-container">
            <a href="https://reactjs.org/" style={{ color: "#2f54eb" }}>
              React
            </a>
            <DashboardIcon style={{ fontSize: "3rem", color: "grey" }} />
          </div>
        </div>
      </Card>

      <Card id="developer-and-community-container">
        <h1>{developerAndCommunity}</h1>

        <div style={{ display: "flex", alignItems: "center" }}>
          <ContactMailIcon
            style={{ fontSize: "1.5rem", color: "grey", marginRight: "10px" }}
          />
          <div style={{ color: "#2f54eb" }}>chita.catalin.adrian@gmail.com</div>
        </div>

        <h2 style={{ fontWeight: 100 }}>{getInvolved}</h2>

        <div style={{ display: "flex", alignItems: "center" }}>
          <GitHubIcon
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
