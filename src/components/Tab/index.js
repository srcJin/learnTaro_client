import { View } from "@tarojs/components";
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
        currentId: tabList?.[0]?.["id"]
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
        this.props.onChange?.(e);
      }
    );
  };

  render() {
    const { className, tabList } = this.props;
    const { currentId } = this.state;
    
    return (
      <View className={`tab-container ${className}`}>
        <View className="tab-bar">
          {/* ? in here tests whether tabList is null, if not null, continue execute  */}
          {tabList?.map((item) => {
            return (
              <View className={`tab-item ${currentId === item.id ? 'active' : ''}`} key={item.id} onClick={() => this.handleClick(item.id)}>
                {item.label}
              </View>
            );
          })}
        </View>
        
      </View>
    );
  }
}
