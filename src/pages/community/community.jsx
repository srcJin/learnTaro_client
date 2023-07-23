import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./community.scss";

// import subpages
import QuestionList from "../questionList/questionList";
import NoExploit from "../../components/NoExploit"

const DEFAULT_TAB_LIST = [
  { title: "Bee Wiki", tab: "wiki", index: 0 },
  { title: "Bee Class", tab: "class", index: 1 },
  { title: "Bee News", tab: "news", index: 2 },
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
        {DEFAULT_TAB_LIST[tabIndex]["tab"] === "wiki" ? (
          <QuestionList />
          // <NoExploit />
        ) : (
          <NoExploit />
        )}
      </View>
      // show the view according to the selected top tab
    );
  }
}
