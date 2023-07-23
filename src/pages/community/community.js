import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView,Image,Swiper,SwiperItem} from '@tarojs/components'
import './community.scss'
import Feed from '../../components/feed/feed.js'

import img1 from '../../asset/images/24213.jpg'
import img2 from '../../asset/images/24280.jpg'
import img3 from '../../asset/images/1444983318907-_DSC1826.jpg'
import img4 from '../../asset/images/icon1.jpeg'
import img5 from '../../asset/images/icon8.jpg'
import img6 from '../../asset/images/icon9.jpeg'

export default class Community extends Component {
  constructor() {
    this.state = {
      imgUrls: [img1,img2,img3],
      feed:[
        {
            'question_id': 1,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca1',
            'feed_source_txt': '赞了回答1',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 2,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex2',
            'feed_source_txt': '回答了问题2',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
      ],
    }
  }
  render () {
    return (
      <View>
        <ScrollView scroll-y className='container discovery withtab'>
          <View className='ctnt0' hidden={this.state.currentNavtab==0 ? false : true}>
              {this.state.feed.map((item, index)=>{
                return (
                  <Feed
                    key={`dis_${index}`}
                    feed_source_img={item.feed_source_img}
                    feed_source_name={item.feed_source_name}
                    feed_source_txt={item.feed_source_txt}
                    question={item.question}
                    good_num={item.good_num}
                    comment_num={item.comment_num}
                    answer_ctnt={item.answer_ctnt} />
                )
              })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

