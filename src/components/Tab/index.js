import { View, Swiper } from "@tarojs/components";
import { PureComponent } from "react";

import "./index.scss";

// the data structure of tabList
// tabList = [
//   {
//     label: String,
//     id: Number,
//   },
// ];

export default class Tab extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
    };
  }

  componentDidMount() {
    const { initTab, tabList } = this.props;
    if (initTab == undefined) {
      this.setState({
        currentId: tabList?.[0]?.["id"],
      });
    } else {
      this.setState({
        currentId: initTab,
      });
    }
  }

  // create a function to change the state of selected item
  handleClick = (id) => {
    this.setState({
      currentId: id,
    });
    this.props.onTabClick?.(id);
  };

  handleChange = (e) => {
    const id = e.detail.current;
    this.setState(
      {
        currentId: id,
      },
      () => {
        // 将当前id传递到外部
        // 用链式判断符解决一下onChange不为空的问题
        this.props.onChange?.(e);
      }
    );
  };

  render() {
    // here children is for slider
    const { className, tabList, children } = this.props;
    const { currentId } = this.state;

    return (
      <View className={`tab-container ${className}`}>
        {/* Start of top Tab bar */}
        <View className="tab-bar">
          {/* ? in here tests whether tabList is null, if not null, continue execute  */}
          {tabList?.map((item) => {
            return (
              <View
                className={`tab-item ${currentId === item.id ? "active" : ""}`}
                key={item.id}
                onClick={() => this.handleClick(item.id)}
              >
                {item.label}
              </View>
            );
          })}
        </View>
        {/* End of top Tab bar */}
        {/* start of Swiper banner for contents*/}
        <Swiper
          // use currentId to let the swiper know what's the current tab
          current={currentId}
          className="tab-content"
          // handle change for swiping directly on swiper by hand
          onChange={this.handleChange}
        >
          {children}
        </Swiper>
      </View>
    );
  }
}
