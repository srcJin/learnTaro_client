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
          mapcard_source_name: "Rebecca1",
          mapcard_source_txt: "Answered",
          mapcard_source_img: img4,
          question: "What should I do when it's winter",
          answer_ctnt:
            "Choose the right location - Bees need a sunny location that is sheltered from wind and rain. Face the hives south or southeast for maximum sun exposure.",
          good_num: "112",
          comment_num: "18",
        },
        {
          question_id: 2,
          answer_id: 25,
          mapcard_source_id: 24,
          mapcard_source_name: "Alex2",
          mapcard_source_txt: "React",
          mapcard_source_img: img5,
          question: "Beekeeping mite control？",
          answer_ctnt:
            "Screen bottom boards - These allow mites to fall through the screen to the ground when bees groom themselves. Helps reduce mite levels. Drone brood removal.",
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
          className="container"
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
