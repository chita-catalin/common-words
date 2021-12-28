import React from "react";
import BlendComponent from "./BlendComponent";
import ResultComponent from "./ResultComponent/ResultComponent";
import useLanguageBlend from "./useLanguageBlend";
import "./style.css";

export const LanguageBlendContext = React.createContext<any>(null);

const LanguageBlendPage = () => {
  const blend = useLanguageBlend();

  return (
    <LanguageBlendContext.Provider value={blend}>
      <div id="language-blend-page">
        {blend.blendedList.length > 0 ? (
          <ResultComponent />
        ) : (
          <BlendComponent />
        )}
      </div>
    </LanguageBlendContext.Provider>
  );
};

export default LanguageBlendPage;
