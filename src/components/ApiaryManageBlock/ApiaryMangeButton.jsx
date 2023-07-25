import { View } from "@tarojs/components";
import React from "react";
import "./ApiaryManageButton.less";

const ApiaryManageButton = ({ text, onClick }) => {
  return (
    <View className="apiary-mange-button" onClick={onClick}>
      {text}
    </View>
  );
};

export default ApiaryManageButton;
