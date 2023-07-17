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

import Tab from '../Tab'

const FLIGHT_TABS = [
    {
        label: '单程',
        id: 0,
    },
    {
        label: '往返',
        id: 1,
    },
    {
        label: '多程',
        id: 2,
    },
]


export default class FlightIndex extends PureComponent {
  render() {
    return <View className="flight-container">
        <View className="flight-top">
        <Tab tablist={FLIGHT_TABS}/>
            </View>

    </View>;
  }
}
