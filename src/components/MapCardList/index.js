// import Taro, { Component } from "@tarojs/taro";
import { PureComponent } from "react";

import { View, ScrollView, Swiper, SwiperItem } from "@tarojs/components";

import "./index.scss";

import MapCard from "../../components/MapCard";

import img4 from "../../asset/images/icon1.jpeg";
import img5 from "../../asset/images/icon8.jpg";

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mapcard: [
        {
          question_id: 1,
          answer_id: 3,
          mapcard_source_id: 23,
          mapcard_source_name: "专家",
          mapcard_source_txt: "",
          mapcard_source_img: img4,
          question: "蜂农小宝",
          answer_ctnt:
            "10年养蜂专家，欢迎前来咨询。",
          good_num: "112",
          comment_num: "18",
        },
        {
          question_id: 2,
          answer_id: 25,
          mapcard_source_id: 24,
          mapcard_source_name: "新手",
          mapcard_source_txt: "",
          mapcard_source_img: img5,
          question: "蜂农小金",
          answer_ctnt:
            "90后刚开始养蜂，请各位蜂友多指教！",
          good_num: "268",
          comment_num: "34",
        },
      ],
    };
  }

  render() {
    const { mapcard } = this.state;
    console.log("mapcard =", mapcard);
    return (
      <View>
        <Swiper
          className="mapcardlist-container"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots="false"
          autoplay
        >
          {mapcard.map((item, index) => {
            // console.log("mapcard inside=", mapcard)
            return (
              <SwiperItem>
                <MapCard
                  key={`dis_${index}`}
                  mapcard_source_img={item.mapcard_source_img}
                  mapcard_source_name={item.mapcard_source_name}
                  mapcard_source_txt={item.mapcard_source_txt}
                  question={item.question}
                  good_num={item.good_num}
                  comment_num={item.comment_num}
                  answer_ctnt={item.answer_ctnt}
                />
              </SwiperItem>
            );
          })}
        </Swiper>
      </View>
    );
  }
}
