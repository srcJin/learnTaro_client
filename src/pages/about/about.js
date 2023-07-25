import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./about.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>关于</Text>
      <Text>关于</Text>
      <Text>关于</Text>

    </View>
  );
}
