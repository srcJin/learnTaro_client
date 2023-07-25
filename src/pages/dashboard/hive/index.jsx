import AppHeader from "@components/AppHeader/AppHeader";
import { View } from "@tarojs/components";
import React from "react";
import { Hive } from "src/types/DataTypes";

const HiveDashboard = () => {
  const data = {
    name: "Hive 1",
    tags: ["Warning", "Unhealthy"],
    weight: {
      value: 100,
      unit: "kg",
    },
    voice: {
      value: 100,
      unit: "dB",
    },
    humidity: {
      outside: {
        value: 100,
        unit: "%",
      },
      inside: {
        value: 100,
        unit: "%",
      },
    },
    temperature: {
      outside: {
        value: 100,
        unit: "°C",
      },
      inside: {
        value: 100,
        unit: "°C",
      },
    },
    questions: [
      {
        question: "Daily Inspection",
        options: ["Yes", "No"],
        answer: "Yes",
      },
      {
        question: "Transition",
        options: ["Yes", "No"],
        answer: "Yes",
      },
      {
        question: "Swarm Size",
        options: ["Big", "Small"],
        answer: "Big",
      },
      {
        question: "Queen Numbers",
        options: ["1", "2", "3"],
        answer: "1",
      },
    ],
  };

  const [hive, setHive] = React.useState(data);

  return (
    <View className="hive-page">
      <AppHeader title="Hive Data" />
    </View>
  );
};

export default HiveDashboard;
