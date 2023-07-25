import React from "react";
import { View, Text } from "@tarojs/components";
import "./AppHeader.less";

const AppHeader = ({ title }) => {
  return (
    <View className="app-header">
      <Text>{title}</Text>
    </View>
  );
};

export default AppHeader;
