import { BlendContext, LanguageContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import { Badge, Modal, Pagination, Spin } from "antd";

import "../style.css";
import { LoadingOutlined } from "@ant-design/icons";

export const WordsTable = () => {
  const blend = useContext(BlendContext);

  const { wordsPerPage, words, minWordLength, maxWordLength, wordMatch } =
    useContext(LanguageContext);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(200);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedWordsArray, setSelectedWordsArray] = useState<string[]>([]);

  return (
    <>
      {blend.blendedList.length > 0 ? (
        <div id="pagination-container">
          <Pagination
            current={page}
            pageSize={itemsPerPage}
            defaultCurrent={1}
            total={blend.blendedList.length}
            pageSizeOptions={[50, 100, 200, 500, 1000, 2000, 5000, 10000]}
            style={{ flexGrow: 1 }}
            onChange={(page, pageSize: number) => {
              setItemsPerPage(pageSize);
              setPage(page);
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "12px" }}>
            {blend.prefixLetters > 0 &&
              typeof blend.blendedList[0] === "object" &&
              blend.blendedList.map((nested: any, index1: number) =>
                nested?.map((el: string, index2: number) => {
                  if (
                    index1 * index2 >= itemsPerPage * page &&
                    index1 * index2 <= itemsPerPage * (page + 1) - 1 &&
                    el.length <= blend.maxLength &&
                    el.length >= blend.minLength &&
                    //and both languages are present
                    nested.join().indexOf("1") !== -1 &&
                    nested.join().indexOf("2") !== -1
                  ) {
                    return (
                      <div
                        className="word-tag"
                        style={{
                          backgroundColor:
                            el.length <= 5
                              ? "#58606e"
                              : el.length <= 10
                              ? "#707a8c"
                              : el.length <= 15
                              ? "#8b97ad"
                              : "#a3b2cc",
                        }}
                        onClick={() => {
                          setSelectedWordsArray(nested);
                          setModalVisible(true);
                        }}
                      >
                        {el.substring(0, el.length - 1)}
                      </div>
                    );
                  }
                })
              )}

            {/*Modal for Similar words*/}
            <Modal
              title="Common words"
              visible={modalVisible}
              onCancel={() => setModalVisible(false)}
              footer={null}
              style={{ backgroundColor: "#EEEEEE" }}
              bodyStyle={{ backgroundColor: "#EEEEEE" }}
              maskStyle={{ backgroundColor: "#00ADB5" }}
            >
              <h3>
                <Badge color="#096dd9" style={{ marginRight: "0px" }} /> (
                {blend.languageCode1}) |
                <Badge color="#cf1322" style={{ marginLeft: "10px" }} />(
                {blend.languageCode2})
              </h3>
              {selectedWordsArray.map((el: string) => {
                return (
                  <>
                    <span
                      style={{
                        color: el.indexOf("1") !== -1 ? "#096dd9" : "#cf1322",
                      }}
                    >
                      {el
                        .substr(0, el.length - 1)
                        .split("")
                        .map((letter: string, index) => (
                          <span
                            style={{
                              fontWeight:
                                index < blend.prefixLetters &&
                                blend.prefixLetters !== 0
                                  ? 600
                                  : 100,
                              textDecoration:
                                index < blend.prefixLetters &&
                                blend.prefixLetters !== 0
                                  ? "underline"
                                  : "normal",
                            }}
                          >
                            {letter}
                          </span>
                        ))}
                    </span>{" "}
                    |{" "}
                  </>
                );
              })}
            </Modal>
          </div>
        </div>
      ) : null}

      {blend.loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "48px",
          }}
        >
          <LoadingOutlined style={{ fontSize: 44, color: "#EEEEEE" }} spin />
        </div>
      )}
    </>
  );
};
