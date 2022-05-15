import React from "react";
import { AccordionUTF8 } from "./AccordionUTF8";

export const Separators = React.memo(function Separators() {
  return (
    <>
      <AccordionUTF8 title="Controls and Basic Latin" min={0} max={127} />
      <AccordionUTF8
        title="Controls and Latin-1 Supplement"
        min={128}
        max={255}
      />
      <AccordionUTF8 title="Latin Extended-A" min={256} max={383} />
      <AccordionUTF8 title="Latin Extended-B" min={384} max={591} />
      <AccordionUTF8 title="Spacing Modifiers" min={688} max={767} />
      <AccordionUTF8 title="Diacritical Marks" min={768} max={879} />
      <AccordionUTF8 title="Greek and Coptic" min={880} max={1023} />
      <AccordionUTF8 title="Cyrillic Basic" min={1024} max={1279} />
      <AccordionUTF8 title="Cyrillic Supplement" min={1280} max={1327} />
      <AccordionUTF8 title="General Punctuation" min={8192} max={8303} />
      <AccordionUTF8 title="Currency Symbols" min={8352} max={8399} />
      <AccordionUTF8 title="Letterlike Symbols" min={8448} max={8527} />
      <AccordionUTF8 title="Arrows" min={8592} max={8703} />
      <AccordionUTF8 title="Mathematical Operators" min={8704} max={8959} />
      <AccordionUTF8 title="Box Drawings" min={9472} max={9599} />
      <AccordionUTF8 title="Block Elements" min={9600} max={9631} />
      <AccordionUTF8 title="Geometric Shapes" min={9632} max={9727} />
      <AccordionUTF8 title="Miscellaneous Symbols" min={9728} max={9983} />
      <AccordionUTF8 title="Dingbats" min={9984} max={10175} />
      <textarea
        style={{ width: "100%", marginTop: "10px" }}
        rows={3}
        name="description"
        placeholder="Add other special characters you would like to ignore!"
      ></textarea>
    </>
  );
});
