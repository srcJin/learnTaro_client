import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./map.scss";

import MapLayer from '../../components/MapLayer'

export default function Index() {
  useLoad(() => {
    console.log("Map Page loaded.");
  });

  console.log("OwnerMap=", MapLayer);

  return (
    <View className="index">
      <MapLayer />
    </View>
  );
}
