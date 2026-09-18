import React from "react";
import { Text, TouchableHighlight } from "react-native";
//import { Button } from "expo-router/build/react-navigation";

type propsType = {
  title: string;
  color?: string;
  textColor?: string;
  fontBig?: number;
  onPress: () => void;
};

const Button: React.FC<propsType> = ({
  title,
  color = "yellow",
  textColor = "black",
  fontBig = 15,
  onPress,
}) => {
  return (
    <TouchableHighlight
      style={{
        width: 100,
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
      }}
      onPress={onPress}
      underlayColor={color}
    >
      <Text
        style={{
          color: textColor,
          fontSize: fontBig,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;


