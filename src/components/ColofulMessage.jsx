import React from "react";

const ColofulMessage = (props) => {
  // 分割代入を使用
  const { color, children } = props;
  const contentStyle = {
    // 分割代入を使用することで下記の通りオブジェクト名省略可能
    // color: props.color,
    color,
    fontSize: "18px",
  };
  // ①変数に設定する方法
  // ②タグで囲う方法。
  //return <p style={contentStyle}>{props.message}</p>;
  // 分割代入を使用することで下記の通りオブジェクト名省略可能
  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
};

export default ColofulMessage;
