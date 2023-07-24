import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./map.scss";

import MapLayer from "../../components/MapLayer";
import SearchBar from "../../components/SearchBar";
import MapCardList from "../../components/MapCardList";

export default function Index() {
  useLoad(() => {
    console.log("Map Page loaded.");
  });

  console.log("OwnerMap=", MapLayer);

  return (
    <View>
      <View>
        <MapLayer />
      </View>
      <View className="onTop">
        <SearchBar  />
      </View>
      <View className="onBottom">
        <MapCardList />
      </View>
    </View>
  );
}
