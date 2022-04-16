import LanguageBlendPage from "./components/pages/LanguageBlendPage/index";
import { MoreStatistics } from "./components/pages/MoreStatistics";
import Resources from "./components/pages/Resources/Resources";
import ChangeLog from "./components/pages/changelog/ChangeLog";
import { Route, Routes, HashRouter } from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import MoreDetails from "./components/pages/MoreDetails";
import LandingPage from "./components/pages/LandingPage";
import useLanguageBlend from "./useLanguageBlend";
import React from "react";
import { About } from "./components/pages/about";

export const BlendContext = React.createContext<any>(null);

function App() {
  const blend = useLanguageBlend();

  return (
    <BlendContext.Provider value={blend}>
      <HashRouter>
        <Routes>
          <Route path="/language-blend" element={<LanguageBlendPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/changelog" element={<ChangeLog />} />
          <Route path="/more-statistics" element={<MoreStatistics />} />
          <Route path="/more-details" element={<MoreDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </BlendContext.Provider>
  );
}

export default App;
