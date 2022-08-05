import LanguageBlendPage from "./components/pages/LanguageBlendPage/index";
import { Route, Routes, HashRouter, Link } from "react-router-dom";
import Resources from "./components/pages/Resources/Resources";
import ChangeLog from "./components/pages/changelog/ChangeLog";
import NotFound from "./components/pages/NotFound/NotFound";
import useLanguageBlend from "./useLanguageBlend";
import { About } from "./components/pages/about";
import Tools from "./components/pages/Tools";
import { useLanguage } from "./useLanguage";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ToolOutlined,
  HistoryOutlined,
  SwapOutlined,
  DatabaseOutlined,
  InfoCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Select } from "antd";
import React, { useState } from "react";

import "antd/dist/antd.css";
import "./App.css";

//env
import "dotenv/config";

export const LanguageContext = React.createContext<any>(null);
export const BlendContext = React.createContext<any>(null);

const { Header, Sider, Content } = Layout;

function App() {
  const blend = useLanguageBlend();
  const language = useLanguage();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <LanguageContext.Provider value={language}>
      <BlendContext.Provider value={blend}>
        <HashRouter>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              className="sider"
              collapsedWidth={0}
            >
              <Menu
                style={{
                  paddingTop: "60px",
                  minHeight: "100vh",
                  height: "100%",
                  backgroundColor: "#393E46",
                }}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
              >
                <Menu.Item key="1">
                  <Link to="/language-blend">
                    <SwapOutlined /> <span>{language.compareLanguages}</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/resources">
                    <DatabaseOutlined /> <span>{language.resources}</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/tools">
                    <ToolOutlined /> <span>{language.extractUniqueWords}</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="4">
                  <Link to="/about">
                    <InfoCircleOutlined /> <span>{language.about}</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/changelog">
                    <HistoryOutlined /> <span>{language.changelog}</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout" style={{ minWidth: 320 }}>
              <Header
                className="site-layout-background"
                style={{
                  color: "white",
                  backgroundColor: "#393E46",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="trigger-container">
                  {collapsed ? (
                    <MenuUnfoldOutlined
                      className="trigger"
                      onClick={() => setCollapsed(!collapsed)}
                    />
                  ) : (
                    <MenuFoldOutlined
                      className="trigger"
                      onClick={() => setCollapsed(!collapsed)}
                    />
                  )}
                </div>

                <div id="title">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {language.commonWords}
                  </Link>
                  <span
                    style={{
                      fontSize: "15px",
                      marginLeft: "2px",
                      color: "white",
                    }}
                    className="version"
                  >
                    V1.0.0
                  </span>
                </div>

                <Select
                  suffixIcon={<DownOutlined style={{ color: "white" }} />}
                  style={{ marginRight: "24px", color: "white" }}
                  defaultValue="english"
                  bordered={false}
                  value={
                    language.language === "romanian" ? "Română" : "English"
                  }
                  onChange={(lng: string) => language.setLanguage(lng)}
                >
                  <Select.Option value="english">
                    {language.english}
                  </Select.Option>
                  <Select.Option value="romanian">
                    {language.romanian}
                  </Select.Option>
                </Select>
              </Header>
              <Content
                style={{
                  padding: "12px",
                  color: "white",
                  minHeight: 280,
                  minWidth: 320,
                  backgroundColor: "#222831",
                }}
              >
                <Routes>
                  <Route
                    path="/language-blend"
                    element={<LanguageBlendPage />}
                  />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/changelog" element={<ChangeLog />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/" element={<LanguageBlendPage />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </HashRouter>
      </BlendContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
