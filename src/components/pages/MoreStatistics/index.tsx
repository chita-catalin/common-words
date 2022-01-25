import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

export const MoreStatistics = () => {
  return (
    <div className="more-statistics-container">
      <Typography style={{ fontSize: "3.58rem", fontWeight: 100 }}>
        STATISTICS:
      </Typography>
      <Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <b>&larr; &nbsp;</b> back to blending
        </Link>
      </Button>
    </div>
  );
};
