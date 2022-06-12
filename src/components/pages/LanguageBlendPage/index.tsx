import { TableHeader } from "./components/tableHeader";
import { WordsTable } from "./components/wordsTable";
import { BlendContext } from "../../../App";
import React from "react";

export const LanguageBlendContext = React.createContext<any>(null);

const LanguageBlendPage = () => {
  const blend = React.useContext(BlendContext);

  return (
    <LanguageBlendContext.Provider value={blend}>
      <TableHeader />
      <WordsTable />
    </LanguageBlendContext.Provider>
  );
};

export default LanguageBlendPage;
