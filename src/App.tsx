import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Layout/NavBar/NavBar";
import LanguageBlendPage from "./components/pages/LanguageBlendPage";
import NotFound from "./components/pages/NotFound/NotFound";
import Resources from "./components/pages/Resources/Resources";
import useTheme from "./components/ThemeComponent/useTheme";
import React from "react";
import "./App.css";

export const ThemeContext = React.createContext<any>(null);

function App() {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LanguageBlendPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
