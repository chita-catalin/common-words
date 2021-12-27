import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70px",
      }}
    >
      <span style={{ fontSize: "6rem" }}>404</span>
      <p style={{ marginTop: "-15px", marginBottom: "30px" }}>
        Nothing to see here
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained">
          <div style={{ display: "flex", alignItems: "center" }}>
            <HomeIcon style={{ marginRight: "5px" }} /> Go to the homepage
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
