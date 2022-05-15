import { useRef, useState } from "react";

const useTextScraper = () => {
  const [text, setText] = useState<string>("");
  const [wordsArray, setWordsArray] = useState<string[]>([]);
  const [UTF8Array, setUTF8Array] = useState<string[]>([]);
  const textRef = useRef();

  return {
    text,
    setText,
    wordsArray,
    setWordsArray,
    UTF8Array,
    setUTF8Array,
    textRef,
  };
};

export default useTextScraper;
