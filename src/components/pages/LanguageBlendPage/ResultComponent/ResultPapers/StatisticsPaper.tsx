import { Button, Paper } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  blend: any;
}

const StatisticsPaper = (props: Props) => {
  const data = {
    labels: [
      props.blend.selectedLanguage1,
      props.blend.selectedLanguage2,
      "common",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [50000, 50000, props.blend.blendedList.length],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Paper
      variant="elevation"
      elevation={3}
      style={{ height: "350px", margin: "10px 0px 0px 10px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "space-between",
        }}
      >
        <div
          style={{
            flexGrow: 1,
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <b> {props.blend.blendedList.length} common words</b>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pie data={data} />
          </div>
        </div>

        <Button variant="contained">
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/more-statistics"
          >
            + more statistics
          </Link>
        </Button>
      </div>
    </Paper>
  );
};

export default StatisticsPaper;
