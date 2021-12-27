import { Paper } from "@mui/material";
import "../style.css";

interface Props {
  blend: any;
}

const MatchPercentResultPaper = (props: Props) => {
  return (
    <Paper variant="elevation" elevation={3} className="result-paper"></Paper>
  );
};

export default MatchPercentResultPaper;
