import { Button, List, ListItemText, Paper } from "@mui/material";

interface Props {
  blend: any;
}

const WordListPaper = (props: Props) => {
  return (
    <Paper
      variant="elevation"
      elevation={3}
      style={{
        height: "300px",
        width: "300px",
        margin: "10px 10px 0px 0px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ overflowY: "scroll", height: "265px" }}>
          <List component="div" disablePadding style={{ paddingLeft: "10px" }}>
            {props.blend.blendedList?.map((word: string) => {
              return <ListItemText primary={word} />;
            })}
          </List>
        </div>
        <Button variant="contained"> + More details</Button>
      </div>
    </Paper>
  );
};

export default WordListPaper;
