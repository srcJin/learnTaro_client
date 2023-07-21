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

//import image api
import {imageReq } from '@/common/api'

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

  // react 生命周期, 在mount时调用getImages请求
  componentDidMount() {
    this.getImages()
  }

  // add a method to fetch the API
  getImages = () => {
    imageReq().then((res) => {
      console.log(res);
    })
  }

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
          >
            <SwiperItem>1111</SwiperItem>
            <SwiperItem>2222</SwiperItem>
            <SwiperItem>3333</SwiperItem>
          </Tab>
        </View>
      </View>
    );
  }
}
