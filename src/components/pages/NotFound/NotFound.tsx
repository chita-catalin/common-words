import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NavBar from "../../Layout/NavBar/NavBar";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "6rem", marginTop: "100px" }}>404</span>
        <p style={{ marginTop: "-15px", marginBottom: "30px" }}>
          Nothing to see here
        </p>
      </div>
    </div>
  );
};

export default NotFound;
