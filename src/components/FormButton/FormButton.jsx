import React from "react";
import { View } from "@tarojs/components";
import "./FormButton.less";

const FormButton = ({ text, onClick, style }) => {
  return (
    <View className="form-button" style={style} onClick={onClick}>
      {text}
    </View>
  );
};

export default FormButton;
