import { BlendContext, LanguageContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import { Badge, Modal, Pagination, Spin } from "antd";

import "../style.css";

export const WordsTable = () => {
  const blend = useContext(BlendContext);

  const { wordsPerPage, words, minWordLength, maxWordLength, wordMatch } =
    useContext(LanguageContext);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(200);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedWordsArray, setSelectedWordsArray] = useState<string[]>([]);
  const [totalWords, setTotalWords] = useState(blend.blendedList.length);

  useEffect(() => {
    setTotalWords(
      blend.blendedList.filter((word: string) => {
        if (
          word.length <= blend.maxLength + 1 &&
          word.length >= blend.minLength
        ) {
          return true;
        }
        return false;
      }).length
    );
  }, [blend.maxLength, blend.minLength]);

  return (
    <>
      {blend.blendedList.length > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "12px",
          }}
        >
          <Pagination
            current={page}
            pageSize={itemsPerPage}
            defaultCurrent={1}
            total={totalWords}
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
                    index1 >= itemsPerPage * page + 1 &&
                    index1 <= itemsPerPage * (page + 2) - 1 &&
                    el.length <= blend.maxLength + 1 &&
                    el.length >= blend.minLength &&
                    //and both languages are present
                    nested.join().indexOf("1") !== -1 &&
                    nested.join().indexOf("2") !== -1
                  ) {
                    return (
                      <div
                        className="word-tag"
                        style={{
                          color: "white",
                          fontSize: "17px",
                          margin: "10px",
                          padding: "4px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          flexGrow: 1,
                          marginTop: "6px",
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
          <Spin />
        </div>
      )}
    </>
  );
};
