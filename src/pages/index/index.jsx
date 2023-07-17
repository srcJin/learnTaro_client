import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

const DEFAULT_TAB_LIST = [
  { title: "title1", tab: "flight", index: 0 },
  { title: "title2", tab: "train", index: 1 },
  { title: "title3", tab: "hotel", index: 2 },
  { title: "title4", tab: "bus", index: 3 },
];

// define a state for default tab selected
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0, // default index selected
    };
  }

  switchTab = (index) => {
    this.setState({
      tabIndex: index,
    });
  };

  render() {
    const { tabIndex } = this.state;
    return (
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
        {DEFAULT_TAB_LIST[tabIndex]["tab"] === "flight" ? (
          <View className="content">flight</View>
        ) : (
          <View className="content">under construction</View>
        )}
      </View>
      // show the view according to the selected top tab
    );
  }
}
