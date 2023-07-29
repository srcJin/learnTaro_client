import React from "react";
import { View, Text, Image } from "@tarojs/components";
import "./AppHeader.less";
import Taro from "@tarojs/taro";

const handleClick = () => {
  Taro.navigateBack();
};
const AppHeader = ({ title, isMainPage = true }) => {
  return (
    <View className="app-header">
      {isMainPage ? (
        <span></span>
      ) : (
        <View className="app-header-back-button" onClick={handleClick}>
          <Image
            className="app-header-back-button-icon"
            src={require("../../assets/image/BackArrow.svg")}
          />
        </View>
      )}
      <Text>{title}</Text>
    </View>
  );
};

export default AppHeader;
