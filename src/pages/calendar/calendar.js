import { PureComponent } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtCalendar } from "taro-ui";
// import { MIN_DATE, MAX_DATE } from "@/common/constant";

import "./calendar.scss";


export default class Calendar extends PureComponent {

  render() {
    return (
      <View className="calendar-page">
        <AtCalendar>

        </AtCalendar>
      </View>
    );
  }
}
