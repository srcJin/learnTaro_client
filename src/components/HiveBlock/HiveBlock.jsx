import React from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Hive } from "src/types/DataTypes";
import "./HiveBlock.less";

const getMeasurement = (value, unit) => {
  return `${value}${unit}`;
};

const getTagSyle = (tag) => {
  if (tag === "Warning") {
    return { backgroundColor: "#ff4949", color: "#fff" };
  }
  if (tag == "Unhealthy") {
    return { backgroundColor: "#ff4949", color: "#fff" };
  }
};

const handleOnClick = () => {
  Taro.navigateTo({
    url: "/pages/dashboard/hive/index",
  });
};

const HiveBlock = ({ hive }) => {
  return (
    <View className="hiveBlock" onClick={handleOnClick}>
      <View className="hiveLeft">
        <View className="hiveProfile" />
      </View>
      <View className="hiveRight">
        <View className="hiveRightTop">
          <Text className="hiveTitle">{hive.name}</Text>
          {hive.tags.map((tag) => (
            <Text key={hive.name} style={getTagSyle(tag)} className="hiveTag">
              {tag}
            </Text>
          ))}
        </View>
        <View className="hiveRightBottom">
          {getMeasurement(hive.weight.value, hive.weight.unit)},{" "}
          {getMeasurement(hive.voice.value, hive.voice.unit)}
        </View>
      </View>
    </View>
  );
};

export default HiveBlock;
