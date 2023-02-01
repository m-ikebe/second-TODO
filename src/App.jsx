import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  console.log("App");
  const [num, setNum] = useState(0);
  const [faceshowFlag, setFaceshowFlag] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
    console.log("Countup");
  };  

  const onClickSwitchShowFlag = () => {
    setFaceshowFlag(!faceshowFlag);
    console.log("SwitchShowFlag");
  };

  // useEffect 第二引数の変数が変更となった場合のみ実行される。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceshowFlag || setFaceshowFlag(true);
      } else {
        faceshowFlag && setFaceshowFlag(false);
      }
    }
    // eslint-disable-next-line
  }, [num]);

  return (
    // JSX記法は一つのタグで囲う必要がある。
    // propsには二つの渡し方がある。
    // ①変数に設定する方法
    // ②タグで囲う方法。
    //　受取側を変更する必要がある。
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColofulMessage color="blue" message="お元気ですか" />
      <ColofulMessage color="pink">お元気ですのよ</ColofulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceshowFlag && <p>(' ω')</p>}
    </>
  );
};

export default App;
