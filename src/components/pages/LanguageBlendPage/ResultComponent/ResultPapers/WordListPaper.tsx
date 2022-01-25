import { Button, List, ListItemText, Paper } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  blend: any;
}

const WordListPaper = (props: Props) => {
  return (
    <Paper
      variant="elevation"
      elevation={3}
      style={{
        margin: "10px 10px 0px 0px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ overflowY: "scroll", height: "339px" }}>
          <List component="div" disablePadding style={{ padding: "10px" }}>
            {props.blend.blendedList?.map((el: any, index: number) => {
              return <ListItemText key={index} primary={el.word} />;
            })}
          </List>
        </div>

        <Button variant="contained">
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/more-details"
          >
            + More details
          </Link>
        </Button>
      </div>
    </Paper>
  );
};

export default WordListPaper;
