import LanguageBlendPage from "./components/pages/LanguageBlendPage/index";
import { MoreStatistics } from "./components/pages/MoreStatistics";
import { Romanian } from "./components/pages/Resources/Romanian";
import Resources from "./components/pages/Resources/Resources";
import ChangeLog from "./components/pages/changelog/ChangeLog";
import { Route, Routes, HashRouter } from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import MoreDetails from "./components/pages/MoreDetails";
import LandingPage from "./components/pages/LandingPage";
import useLanguageBlend from "./useLanguageBlend";
import { About } from "./components/pages/about";
import { useLanguage } from "./useLanguage";
import React from "react";

//env
import "dotenv/config";
import Tools from "./components/pages/Tools";
import TextScraper from "./components/pages/Tools/TextScraper";

export const LanguageContext = React.createContext<any>(null);
export const BlendContext = React.createContext<any>(null);

function App() {
  const blend = useLanguageBlend();
  const language = useLanguage();

  return (
    <LanguageContext.Provider value={language}>
      <BlendContext.Provider value={blend}>
        <HashRouter>
          <Routes>
            <Route path="/language-blend" element={<LanguageBlendPage />} />
            <Route path="/languages/ro" element={<Romanian />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/changelog" element={<ChangeLog />} />
            <Route path="/more-statistics" element={<MoreStatistics />} />
            <Route path="/more-details" element={<MoreDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/text-scraper" element={<TextScraper />} />
          </Routes>
        </HashRouter>
      </BlendContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
