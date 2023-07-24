// import Taro, { Component } from "@tarojs/taro";
import { PureComponent } from "react";

import {
  View,
  ScrollView,
} from "@tarojs/components";
import "./index.scss";
import Feed from "../../components/Feed";

import img4 from "../../asset/images/icon1.jpeg";
import img5 from "../../asset/images/icon8.jpg";

export default class QuestionList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          question_id: 1,
          answer_id: 3,
          feed_source_id: 23,
          feed_source_name: "Rebecca1",
          feed_source_txt: "Answered",
          feed_source_img: img4,
          question: "What should I do when it's winter",
          answer_ctnt:
            "Choose the right location - Bees need a sunny location that is sheltered from wind and rain. Face the hives south or southeast for maximum sun exposure.Get the proper equipment - At minimum you'll need protective clothing (veil, gloves, etc), smokers, hive tools, frames, supers, and beeswax foundation. Purchase quality materials built specifically for beekeeping.",
          good_num: "112",
          comment_num: "18",
        },
        {
          question_id: 2,
          answer_id: 25,
          feed_source_id: 24,
          feed_source_name: "Alex2",
          feed_source_txt: "React",
          feed_source_img: img5,
          question: "Beekeeping mite control？",
          answer_ctnt:
            "Screen bottom boards - These allow mites to fall through the screen to the ground when bees groom themselves. Helps reduce mite levels. Drone brood removal - Mites are attracted to drone brood. Remove and destroy capped drone brood frames to remove a source of mites.",
          good_num: "268",
          comment_num: "34",
        },
      ],
    };
  }

  render() {
    const { feed } = this.state;
    console.log("feed =", feed)
    return (
      <View>

        <ScrollView scroll-y className="container">
          {feed.map((item, index) => {
            // console.log("feed inside=", feed)
            return (
              <Feed
                key={`dis_${index}`}
                feed_source_img={item.feed_source_img}
                feed_source_name={item.feed_source_name}
                feed_source_txt={item.feed_source_txt}
                question={item.question}
                good_num={item.good_num}
                comment_num={item.comment_num}
                answer_ctnt={item.answer_ctnt}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
