export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/order/order',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeeHive',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7F8389',
    selectedColor: '#5495e6',
    borderStyle: 'black', // upper border line color
    backgroundColor: '#fff', // background color of the tab bar
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/images/index-unselected.png',
        selectedIconPath: 'assets/images/index-selected.png',
        text: 'Index',
      },
      {
        pagePath: 'pages/order/order',
        iconPath: 'assets/images/order-unselected.png',
        selectedIconPath: 'assets/images/order-selected.png',
        text: 'Order',
      },
    ]
  }
})
