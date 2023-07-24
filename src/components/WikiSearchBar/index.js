import Taro from "@tarojs/taro";
import { AtSearchBar } from "taro-ui";
import { PureComponent } from 'react';
import "./index.scss"

export default class WikiSearchBar extends PureComponent {
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
        actionName="提问"
        showActionButton
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
    );
  }
}
