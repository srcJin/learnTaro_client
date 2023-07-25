// document: https://taro-docs.jd.com/docs/app-config

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/order/order',
    'pages/community/community',
    'pages/profile/profile',
    'pages/map/map',
    'pages/login/login'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeeHive',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7F8389',
    selectedColor: '#FF8D40',
    borderStyle: 'black', // upper border line color
    backgroundColor: '#fff', // background color of the tab bar
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/icon/Tabbar/home_inactivated@2x.png',
        selectedIconPath: 'assets/icon/Tabbar/home_activated@2x.png',
        text: '我的蜂箱',
      },
      // {
      //   pagePath: 'pages/order/order',
      //   iconPath: 'assets/images/order-unselected.png',
      //   selectedIconPath: 'assets/images/order-selected.png',
      //   text: 'Order',
      // },
      {
        pagePath: 'pages/login/login',
        iconPath: 'assets/images/order-unselected.png',
        selectedIconPath: 'assets/images/order-selected.png',
        text: 'Login',
      },
      {
        pagePath: 'pages/map/map',
        iconPath: 'assets/icon/Tabbar/map_inactivated@2x.png',
        selectedIconPath: 'assets/icon/Tabbar/map_activated@2x.png',
        text: '地图',
      },
      {
        pagePath: 'pages/community/community',
        iconPath: 'assets/icon/Tabbar/community_inactivated@2x.png',
        selectedIconPath: 'assets/icon/Tabbar/community_activated@2x.png',
        text: '社区',
      },
      {
        pagePath: 'pages/profile/profile',
        iconPath: 'assets/icon/Tabbar/profile_inactivated@2x.png',
        selectedIconPath: 'assets/icon/Tabbar/profile_activated@2x.png',
        text: '个人信息',
      },
    ]
  }
})
