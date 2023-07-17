import { View } from "@tarojs/components";
import { PureComponent } from "react";

import "./index.scss";

import Tab from '../Tab'

// the data structure of tabList
// tabList = [
//   {
//     label: String,
//     id: Number,
//   },
// ];

export default class Tab extends PureComponent {
  render() {
    const { className, tabList } = this.props;
    return (
      <View className={`tab-container ${className}`}>
        <View className="tab-bar">
          {/* ? in here tests whether tabList is null, if not null, continue execute  */}
          {tabList?.map((item) => {
            return (
              <View className="tab-item" key={item.id}>
                {item.label}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
