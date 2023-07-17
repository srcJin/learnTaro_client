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

export default class FlightIndex extends PureComponent {
  render() {
    return <View className="flight-container"></View>;
  }
}
