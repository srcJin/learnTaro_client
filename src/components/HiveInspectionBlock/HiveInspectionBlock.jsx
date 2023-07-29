import React from "react";
import { View } from "@tarojs/components";
import "./HiveInspectionBlock.less";

const HiveInspectionBlock = ({ hive, handleInspectionClick }) => {
  const isActive = (option) => {
    return option === hive.questions[0].answer;
  };

  return (
    <View className="inspection-block">
      <View className="inspection-block-title">Inspection</View>
      <View className="inspection-block-content">
        <View
          className="inspection-button"
          onClick={handleInspectionClick}
          style={isActive("Yes") ? { backgroundColor: "#f8b933;" } : {}}
        >
          Yes
        </View>
        <View
          className="inspection-button"
          onClick={handleInspectionClick}
          style={isActive("No") ? { backgroundColor: "#f8b933;" } : {}}
        >
          No
        </View>
      </View>
    </View>
  );
};

export default HiveInspectionBlock;
