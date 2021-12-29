import React from "react";
import { Button, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../App";
import { styled } from "@mui/material/styles";

const NavBar = () => {
  const [pathName, setPathName] = React.useState<string>("");
  const theme = React.useContext(ThemeContext);

  const updateHighlight = (pathname: string) => {
    setPathName(pathname);
  };

  React.useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        borderBottom: theme.light ? "2px solid #121212" : "2px solid #fff",
        zIndex: 999,
        color: theme.light ? "#121212" : "white",
        backgroundColor: theme.light ? "white" : "#121212",
        flexDirection: theme.width < theme.mobileBreakpoint ? "column" : "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection:
            theme.width < theme.mobileBreakpoint ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to="/"
          onClick={() => updateHighlight("/")}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant={pathName === "/" ? "outlined" : "text"}
            style={{
              width: "190px",
              marginRight: "10px",
              color: theme.light ? "#121212" : "#fff",
              borderColor: theme.light ? "#121212" : "#fff",
            }}
          >
            Compare Languages
          </Button>
        </Link>

        <Link
          to="/resources"
          onClick={() => updateHighlight("/resources")}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant={pathName === "/resources" ? "outlined" : "text"}
            style={{
              width: "110px",
              marginRight: "10px",
              color: theme.light ? "#121212" : "#fff",
              borderColor: theme.light ? "#121212" : "#fff",
            }}
          >
            Resources
          </Button>
        </Link>

        <Link
          to="/about"
          onClick={() => updateHighlight("/about")}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant={pathName === "/about" ? "outlined" : "text"}
            style={{
              width: "90px",
              color: theme.light ? "#121212" : "#fff",
              borderColor: theme.light ? "#121212" : "#fff",
            }}
          >
            About
          </Button>
        </Link>

        <Link
          to="/changelog"
          onClick={() => updateHighlight("/changelog")}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant={pathName === "/changelog" ? "outlined" : "text"}
            style={{
              width: "100px",
              color: theme.light ? "#121212" : "#fff",
              borderColor: theme.light ? "#121212" : "#fff",
              marginLeft: "10px",
            }}
          >
            changelog
          </Button>
        </Link>
      </div>
      <div>
        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={theme.light}
          onChange={() => theme.setLight(!theme.light)}
        />
      </div>
    </div>
  );
};

export default NavBar;
