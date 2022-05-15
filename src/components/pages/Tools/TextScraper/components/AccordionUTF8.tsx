import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { TextScraperContext } from "..";
import { useContext } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

export const AccordionUTF8 = React.memo(function AccordionUTF8({
  title,
  min,
  max,
}: {
  title: string;
  min: number;
  max: number;
}) {
  const { UTF8Array } = useContext(TextScraperContext);

  return (
    <Accordion style={{ width: "100%", marginTop: "0px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {console.log("wtf brooooh")}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {UTF8Array.map((char: string, index: number) => {
            if (index >= min && index <= max)
              return (
                <div
                  style={{
                    padding: 1,
                    border: "1px solid black",
                    borderRadius: "2px",
                    margin: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                  }}
                >
                  {char}
                </div>
              );
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
});
