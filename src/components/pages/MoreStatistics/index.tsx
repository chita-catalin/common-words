import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const MoreStatistics = () => {
  return (
    <div className="more-statistics-container">
      <h3>MORE STATISTICS</h3>
      <Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <b>&larr; &nbsp;</b> Back to {" "}
        </Link>
      </Button>
    </div>
  );
};
