import { useRef, useState } from "react";

const useTextScraper = () => {
  const [text, setText] = useState<string>("");
  const [wordsArray, setWordsArray] = useState<string[]>([]);
  const [UTF8Array, setUTF8Array] = useState<string[]>([]);
  const [goodCharacters, setGoodCharacters] = useState<string[]>([]);
  const [badCharacters, setBadCharacters] = useState<string[]>([]);
  const textRef = useRef();

  return {
    text,
    setText,
    wordsArray,
    setWordsArray,
    UTF8Array,
    setUTF8Array,
    textRef,
    goodCharacters,
    setGoodCharacters,
    badCharacters,
    setBadCharacters,
  };
};

export default useTextScraper;
