import React from "react";
import { View, Text, ScrollView, Button } from "@tarojs/components";
import "./ApiaryBlock.less";

const isCurrentApiary = (apiary, currentApiary) => {
  return apiary.name === currentApiary.name;
};

const ApiaryBlock = ({ apiaries, currentApairy, setCurrentApiary }) => {
  const handleApiaryChange = (apiary) => {
    setCurrentApiary(apiary);
  };

  return (
    <ScrollView className="apiary-block" scrollX scrollWithAnimation>
      <View className="apiary-wrapper">
        {apiaries.map((apiary) => {
          return (
            <View key={apiary.name}>
              <Button
                className="apiary-rectangle"
                onClick={() => handleApiaryChange(apiary)}
                style={
                  isCurrentApiary(apiary, currentApairy)
                    ? { backgroundColor: "#f8b933" }
                    : {}
                }
              >
                <Text className="apiary-text">{apiary.name}</Text>
              </Button>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ApiaryBlock;
