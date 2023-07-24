// ref: https://juejin.cn/post/7250639505526800421

import { CoverView, Map, View } from '@tarojs/components'
import { Component } from "react";
import Taro from "@tarojs/taro";

const normalCallout = {
  id: 1,
  latitude: 32,
  longitude: 122,
  callout: {
    content: '位置',
    color: '#000000',
    fontSize: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ffffff',
    bgColor: '#fff',
    padding: 5,
    display: 'ALWAYS',
    textAlign: 'center',
  }
}

class MapLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 111, // center longitude
      latitude: 23, // center latitude
      customMarkers: [],
      showTarget: false,
    }
  }

  async componentDidMount() {
    await this.getCurrentLocation('init')
  }

  //获取当前位置
  getCurrentLocation = async (e) => {
    const that = this
    if (e !== 'init') {
      e.stopPropagation()
    }
    await Taro.getLocation({
      type: 'wgs84',
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setState({
          latitude,
          longitude,
        })
      }
    })
  }
  //目标
  onTab = (e) => {
    const { showTarget } = this.state
    if (showTarget) {
      return
    }
    normalCallout['longitude'] = e.currentTarget.longitude
    normalCallout['latitude'] = e.currentTarget.latitude
    this.setState({
      customMarkers: [normalCallout]
    })
  }

  // ref:https://blog.csdn.net/hanchengmei/article/details/126777182
// 添加Marker
// MapContext.addMarkers({
// 	markers: [],
// 	clear: false/true,  // 是否先清空地图上所有marker
// 	success: () => {},
// 	fail: () => {}
// })

// // 删除
// MapContext.removeMarkers({
// 	markerIds: [], // 注意！！！这里是id集合
// 	success: () => {},
// 	fail: () => {}
// })

// // 三合一
// MapContext.changeMarkers({
// 	add: [], // 注意！！！这里是marker数组
// 	remove: [],
// 	update: [],
// 	success: () => {},
// 	fail: () => {}
// })


  //   componentDidUpdate(prevProps): {
  //     if(prevProps !== this.props) {
  //   const mapCtx = Taro.createMapContext('myMap')
  //   mapCtx.moveToLocation()
  //   this.setState({ customMarkers: [] })
  // }
  //   }

  render() {
    console.log("MapLayer render()");
    const { latitude, longitude, customMarkers } = this.state
    return (
      <Map
        markers={customMarkers.length ? customMarkers : []}
        latitude={latitude}
        longitude={longitude}
        style={{ height: '100vh', width: '100vw' }}
        showLocation
        onClick={this.onTab}
        // showCompass
        scale="5"
        id="myMap"
        includePoints={customMarkers.length ? customMarkers : []}
      >
      </Map>
    )
  }

} 
export default MapLayer