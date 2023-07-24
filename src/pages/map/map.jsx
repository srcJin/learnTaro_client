import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./map.scss";

import MapLayer from '../../components/MapLayer'
import SearchBar from '../../components/SearchBar'
import MapCardList from "../../components/MapCardList";

export default function Index() {
  useLoad(() => {
    console.log("Map Page loaded.");
  });

  console.log("OwnerMap=", MapLayer);

  return (
    <View className="index">
      {/* <SearchBar /> */}
      {/* <MapLayer /> */}
      <View className="index-container">
        <View className="top">
        
          <View className="index-tab">
            {DEFAULT_TAB_LIST.map((item) => (
              // dynamically iterate className
              // default selection is defined by props
              <View
                key={item.tab}
                className={`index_tab_item ${item.tab} ${
                  tabIndex === item.index ? "current" : ""
                }`}
                onClick={() => this.switchTab(item.index)}
              >
                {item.title}
              </View>
            ))}
          </View>
        </View>
        {DEFAULT_TAB_LIST[tabIndex]["tab"] === "wiki" ? (
          <MapCardList />
          // <NoExploit />
        ) : (
          <NoExploit />
        )}
      </View>

    </View>
  );
}
