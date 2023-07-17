import { PureComponent } from "react";
import {
  View,
  SwiperItem,
  Text,
  Button,
  Swiper,
  Image,
} from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

import Tab from "../../../components/Tab";

const FLIGHT_TABS = [
  {
    label: "单程",
    id: 0,
  },
  {
    label: "往返",
    id: 1,
  },
  {
    label: "多程",
    id: 2,
  },
];

export default class FlightIndex extends PureComponent {
  handleTabClick = (id) => {
    console.log(id);
  };
  render() {
    return (
      <View className="flight-container">
        <View className="flight-top">
          <Tab
            tabList={FLIGHT_TABS}
            onTabClick={this.handleTabClick}
            className="flight-index-tab"
          ></Tab>
        </View>
      </View>
    );
  }
}
