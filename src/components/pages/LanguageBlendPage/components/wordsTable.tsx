import { BlendContext, LanguageContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";

import "../style.css";
import { Pagination, Spin, Table, Tag } from "antd";

export const WordsTable = () => {
  const blend = useContext(BlendContext);

  const { wordsPerPage, words, minWordLength, maxWordLength, wordMatch } =
    useContext(LanguageContext);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(200);

  useEffect(() => {
    blend.setFilteredList(
      blend.blendedList.filter((word: string) => {
        if (word.length >= blend.minLength && word.length <= blend.maxLength)
          return true;
        else return false;
      })
    );
  }, [blend.minLength, blend.maxLength, blend.blendedList]);

  const data: any = blend.filteredList.map((el: string) => {
    return { word: el };
  });

  const columns: any = [
    {
      title: "word",
      dataIndex: "word",
      key: "word",
      render: (text: string) => <a>{text}</a>,
    },
  ];

  return (
    <>
      {blend.tableView && blend.blendedList.length > 0 ? (
        <Table
          columns={columns}
          dataSource={data}
          style={{ marginTop: "6px" }}
          bordered
          loading={blend.loading}
          size="small"
          pagination={{
            pageSize: itemsPerPage,
            position: ["topCenter", "bottomCenter"],
          }}
        />
      ) : blend.blendedList.length > 0 ? (
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
            total={blend.filteredList.length}
            pageSizeOptions={[50, 100, 200, 500, 1000, 2000, 5000, 10000]}
            style={{ flexGrow: 1 }}
            onChange={(page, pageSize: number) => {
              setItemsPerPage(pageSize);
              setPage(page);
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "6px" }}>
            {blend.filteredList.map((word: string, index: number) => {
              if (
                index >= itemsPerPage * page &&
                index <= itemsPerPage * (page + 1) - 1
              ) {
                return (
                  <Tag
                    style={{
                      flexGrow: 1,
                      marginTop: "6px",
                      backgroundColor:
                        word.length <= 5
                          ? "#e6f7ff"
                          : word.length <= 10
                          ? "#bae7ff"
                          : word.length <= 15
                          ? "#91d5ff"
                          : "#69c0ff",
                    }}
                  >
                    {word.split("").map((letter: string, index) => (
                      <span
                        style={{
                          color:
                            index < blend.suffixLetters &&
                            blend.suffixLetetrs1 !== 0
                              ? "#f5222d"
                              : "black",
                          fontWeight:
                            index < blend.suffixLetters &&
                            blend.suffixLetetrs1 !== 0
                              ? 500
                              : 100,
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </Tag>
                );
              }
            })}
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
