import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavBar from "../../Layout/NavBar/NavBar";
import ApiIcon from "@mui/icons-material/Api";

import "./style.css";
import { LanguageContext } from "../../../App";
import { useContext } from "react";

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
      <NavBar />
      <div id="about-content">
        <div id="project-description-container">
          <h1>{findTheCommonWordsOfLanguages}</h1>
          <div
            style={{
              display: "flex",
              color: "grey",
              alignItems: "center",
              maxWidth: "95%",
            }}
          >
            <span style={{ color: "grey" }}>
              <span style={{ color: "#00ADB5", fontWeight: "bolder" }}>
                ABC
              </span>{" "}
              PVBF AUX{" "}
              <span style={{ color: "#00ADB5", fontWeight: "bolder" }}>
                DEF
              </span>{" "}
              IQYE
            </span>
            <LanguageIcon
              style={{ fontSize: "3rem", margin: "0px 10px 0px 10px" }}
            />
            <CompareArrowsIcon
              style={{ fontSize: "2rem", margin: "0px 10px 0px 10px" }}
            />
            <LanguageIcon
              style={{ fontSize: "3rem", margin: "0px 10px 0px 10px" }}
            />
            <span style={{ color: "grey" }}>
              OQUE{" "}
              <span style={{ color: "#00ADB5", fontWeight: "bolder" }}>
                ABC
              </span>{" "}
              KIYW JSU{" "}
              <span style={{ color: "#00ADB5", fontWeight: "bolder" }}>
                DEF
              </span>
            </span>
          </div>
          <ArrowDownwardIcon style={{ fontSize: "2rem", color: "grey" }} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "37px",
            }}
          >
            <ListAltIcon style={{ fontSize: "3rem", color: "grey" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#00ADB5",
                marginLeft: "7px",
                fontWeight: "bolder",
              }}
            >
              <span>ABC</span>
              <span>DEF</span>
            </div>
          </div>
        </div>
        {/*App made using mern stack*/}

        <h1>{appBuiltUsingMERN}</h1>

        <div id="mern-container">
          <div className="technology-container">
            <a href="https://www.mongodb.com/" style={{ color: "#00ADB5" }}>
              mongoDB
            </a>
            <StorageIcon style={{ fontSize: "3rem", color: "grey" }} />
          </div>

          <div className="technology-container">
            <a href="https://nodejs.dev/" style={{ color: "#00ADB5" }}>
              Node
            </a>
            <ApiIcon style={{ fontSize: "3rem", color: "grey" }} />
          </div>

          <div className="technology-container">
            <a href="https://expressjs.com/" style={{ color: "#00ADB5" }}>
              Express
            </a>
            <ConstructionIcon style={{ fontSize: "3rem", color: "grey" }} />
          </div>

          <div className="technology-container">
            <a href="https://reactjs.org/" style={{ color: "#00ADB5" }}>
              React
            </a>
            <DashboardIcon style={{ fontSize: "3rem", color: "grey" }} />
          </div>
        </div>

        <div id="developer-and-community-container">
          <h1>{developerAndCommunity}</h1>

          <div style={{ display: "flex", alignItems: "center" }}>
            <ContactMailIcon
              style={{ fontSize: "1.5rem", color: "grey", marginRight: "10px" }}
            />
            <div style={{ color: "#00ADB5" }}>
              chita.catalin.adrian@gmail.com
            </div>
          </div>

          <h2 style={{ fontWeight: 100 }}>{getInvolved}</h2>

          <div style={{ display: "flex", alignItems: "center" }}>
            <GitHubIcon
              style={{ fontSize: "1.5rem", color: "grey", marginRight: "10px" }}
            />
            <div style={{ color: "#00ADB5" }}>
              github.com/chita-catalin/common-words{" "}
            </div>
          </div>

          <h2 style={{ fontWeight: 100 }}>{contribuitors}</h2>
          <a
            href="https://github.com/chita-catalin"
            style={{ color: "#00ADB5" }}
          >
            chita-catalin
          </a>
        </div>
      </div>
    </div>
  );
};
