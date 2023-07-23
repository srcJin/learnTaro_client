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
import { imageReq } from '@/common/api'

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

  // constructor to handle data input
  constructor(props) {
    super(props)
    this.state = {
      imageList: [],
    }
  }

  // react 生命周期, 在mount时调用getImages请求
  componentDidMount() {
    console.log("componentDidMount");
    this.getImages()
    console.log("this.getImages()");

  }

  // add a method to fetch the API
  getImages = () => {
    console.log("inside getImages(), running imageReq()", imageReq());
    imageReq().then((res) => {
      console.log("getImages, res= ", res);
      const { result } = res
      this.setState({
        imageList: result || [],
      })
    })
  }

  handleTabClick = (id) => {
    console.log("handleTabClick id = ", id);
  };


  render() {
    // define an imageList in this.state
    const { imageList } = this.state;

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
            <SwiperItem>
              <Swiper
                className="advs-banner-bd"
                autoplay
                circular
                interval={3000}
              >
                {imageList.map((item) => {
                  return (
                    <SwiperItem key={item.id} className="item">
                      <Image className="img" src={item.imgUrl}></Image>
                    </SwiperItem>
                  );
                })}
              </Swiper>
            </SwiperItem>
          </Tab>
        </View>
      </View>
    );
  }
}
