import Taro from "@tarojs/taro";
import { AtSearchBar } from "taro-ui";
import { PureComponent } from 'react';
import "./index.scss"

export default class SearchBar extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
    };
  }
  onChange(value) {
    this.setState({
      value: value,
    });
  }
  onActionClick() {
    console.log("Trigger Search");
  }
  render() {
    return (
      <AtSearchBar
        actionName="寻找蜜源"
        showActionButton
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
    );
  }
}
