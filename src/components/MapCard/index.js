import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import more from "../../asset/images/more.png";
import { PureComponent } from "react";

import "./index.scss";

export default class MapCard extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigateTo(url) {
    Taro.navigateTo({ url: url });
  }

  render() {
    return (
      <View className="mapcard-item">
        <View className="mapcard-source">
          <View className="avatar flex1">
            <Image src={this.props.mapcard_source_img}></Image>
          </View>
          <View className="flex8">
            <Text className="mapcard-source-txt">
              {this.props.mapcard_source_name}
              {this.props.mapcard_source_txt}
            </Text>
          </View>
          <View className="flex1">
            <Image className="item-more" mode="aspectFit" src={more}></Image>
          </View>
        </View>
        <View className="mapcard-content">
          <View
            className="question"
          // onClick={this.navigateTo.bind(this, "/pages/question/question")}
          >
            <View className="question-link">
              <Text>{this.props.question}</Text>
            </View>
          </View>
          <View className="answer-body">
            <View>
              <Text
                className="answer-txt"
              // onClick={this.navigateTo.bind(this, "/pages/answer/answer")}
              >
                {this.props.answer_ctnt}
              </Text>
            </View>
            <View className="answer-actions">
              <View className="like dot">
                <View>{this.props.good_num} 赞同 </View>
              </View>
              <View className="comments dot">
                <View>{this.props.comment_num} 评论 </View>
              </View>
              <View className="follow-it">
                <View>关注问题</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
