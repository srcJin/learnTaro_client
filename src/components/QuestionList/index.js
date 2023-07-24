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
          feed_source_name: "蜂农小策",
          feed_source_txt: " 回答了问题",
          feed_source_img: img4,
          question: "意蜂养殖如何过冬？",
          answer_ctnt:
            "蜜蜂在安静的环境中过冬，不受外界干扰，养蜂人必须为蜜蜂创造安静的环境。 越冬要选择安静的场所，远离人口密集区和家畜繁殖区....",
          good_num: "112",
          comment_num: "18",
        },
        {
          question_id: 2,
          answer_id: 25,
          feed_source_id: 24,
          feed_source_name: "蜂佬大白",
          feed_source_txt: " 提问",
          feed_source_img: img5,
          question: "东北蜂螨如何治理？",
          answer_ctnt:
            "养蜂员想把蜂养好，必须把蜂螨控制到最低限度，使之不影响到蜂群正常生活，中华蜜蜂由于具有自行清理蜂螨能力，虽见螨却无碍大局，而意蜂如果不进行人口治...",
          good_num: "268",
          comment_num: "34",
        },
        {
          question_id: 3,
          answer_id: 28,
          feed_source_id: 27,
          feed_source_name: "蜂业小白",
          feed_source_txt: " 提问",
          feed_source_img: img5,
          question: "自然分蜂是什么？如何有效管理？",
          answer_ctnt:
            "分蜂是养蜂的自然增殖和繁殖步骤。这一过程通常发生在春季或初夏（4月至6月）。简而言之，蜂王在一些工蜂的陪同下，离开蜂场寻找新的巢穴。这群蜜蜂（蜂王在其忠诚的...",
          good_num: "268",
          comment_num: "34",
        },
        {
          question_id: 4,
          answer_id: 29,
          feed_source_id: 28,
          feed_source_name: "蜂蜂晓峰",
          feed_source_txt: " 关注",
          feed_source_img: img5,
          question: "城市养蜂可行吗？",
          answer_ctnt:
            "城市养蜂需要考虑的问题 一般来说,在我国的城市高楼中是不具备养蜂的条件的,但如果高楼的位置比较特殊,哪怕是几百米的高度也是适合养蜂且也能成功的,但就...",
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
