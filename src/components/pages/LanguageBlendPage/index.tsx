import { Button, Card, Divider, InputNumber, Select } from "antd";
import { WordsTable } from "./components/wordsTable";
import { DownOutlined, SwapOutlined } from "@ant-design/icons";
import { BlendContext, LanguageContext } from "../../../App";
import { Language } from "../../../types";
import React from "react";

import "./style.css";

export const LanguageBlendContext = React.createContext<any>(null);

const LanguageBlendPage = () => {
  const blend = React.useContext(BlendContext);
  const language = React.useContext(LanguageContext);

  const resetFilters = () => {
    blend.setMinLength(1);
    blend.setMaxLength(99);
  };

  const handleFirstLanguageChange = (value: string) => {
    blend.getFirstLanguage(value);
  };

  const handleSecondLanguageChange = (value: string) => {
    blend.getSecondLanguage(value);
  };

  return (
    <LanguageBlendContext.Provider value={blend}>
      <div id="header-container">
        <Card id="inputs-card">
          <Select
            suffixIcon={
              <DownOutlined
                style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
              />
            }
            onChange={handleFirstLanguageChange}
            placeholder="select a language"
            style={{ width: "160px" }}
            defaultValue={""}
          >
            {blend.languages.map((language: Language) => {
              return (
                <Select.Option value={language.name} key={language._id}>
                  {language.name}
                </Select.Option>
              );
            })}
          </Select>
          <SwapOutlined
            style={{ marginLeft: "10px", marginRight: "10px", color: "white" }}
          />

          <Select
            suffixIcon={
              <DownOutlined
                style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
              />
            }
            placeholder="select another language"
            onChange={handleSecondLanguageChange}
            defaultValue={""}
            style={{ width: "160px" }}
          >
            {blend.languages
              .sort((a: Language, b: Language) => {
                if (a.name > b.name) return 1;
                return -1;
              })
              .map((language: Language) => {
                return (
                  <Select.Option value={language.name} key={language._id}>
                    {language.name}
                  </Select.Option>
                );
              })}
          </Select>
        </Card>

        {blend.blendedList.length > 0 && (
          <Card id="controls-card">
            <div id="controls-content">
              <div style={{ margin: "5px" }}>
                {language.minWordLength}{" "}
                <InputNumber
                  size="small"
                  min={1}
                  max={99}
                  value={blend.minLength}
                  onChange={(nr: number) => {
                    blend.setMinLength(nr);
                  }}
                  style={{ marginLeft: "2px", width: "55px" }}
                />
              </div>
              <Divider type="vertical" />

              <div style={{ margin: "5px" }}>
                {language.maxWordLength}{" "}
                <InputNumber
                  size="small"
                  min={1}
                  max={99}
                  value={blend.maxLength}
                  onChange={(nr: number) => {
                    blend.setMaxLength(nr);
                  }}
                  style={{ marginLeft: "2px", width: "55px" }}
                />
              </div>
              <Divider type="vertical" />

              <div style={{ margin: "5px" }}>
                {language.samePrefixLength}{" "}
                <InputNumber
                  size="small"
                  min={3}
                  max={99}
                  value={blend.prefixLetters}
                  onChange={(nr: number) => {
                    blend.setPrefixLetters(nr);
                  }}
                  style={{ marginLeft: "2px", width: "55px" }}
                />
              </div>

              <Divider type="vertical" />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button style={{ marginTop: "12px" }} onClick={resetFilters}>
                {language.resetAllFilters}
              </Button>
            </div>
          </Card>
        )}
      </div>
      <WordsTable />
    </LanguageBlendContext.Provider>
  );
};

export default LanguageBlendPage;
