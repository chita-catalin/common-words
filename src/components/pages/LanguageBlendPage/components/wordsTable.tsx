import { BlendContext, LanguageContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";

import "../style.css";
import { Pagination, Table, Tag } from "antd";

export const WordsTable = () => {
  const blend = useContext(BlendContext);

  const { wordsPerPage, words, minWordLength, maxWordLength, wordMatch } =
    useContext(LanguageContext);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(200);
  const [localFilteredList, setLocalFilteredList] = useState<string[]>(
    blend.blendedList.length ? blend.blendedList : []
  );

  useEffect(() => {
    setLocalFilteredList(
      blend.blendedList.filter((word: string) => {
        if (word.length >= blend.minLength && word.length <= blend.maxLength)
          return true;
        else return false;
      })
    );
  }, [blend.minLength, blend.maxLength, blend.blendedList]);

  const data: any = blend.blendedList.map((el: string) => {
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
          style={{ marginTop: "12px" }}
          bordered
          loading={blend.loading}
          size="small"
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
            total={localFilteredList.length}
            pageSizeOptions={[50, 100, 200, 500, 1000, 2000, 5000, 10000]}
            style={{ flexGrow: 1 }}
            onChange={(page, pageSize: number) => {
              setItemsPerPage(pageSize);
              setPage(page);
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "6px" }}>
            {localFilteredList.map((word: string, index: number) => {
              if (
                index >= itemsPerPage * page &&
                index <= itemsPerPage * (page + 1) - 1
              ) {
                return (
                  <Tag
                    style={{
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
                    {word}
                  </Tag>
                );
              }
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};
