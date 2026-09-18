import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import defaultSyles from "../style/defaultStyles";
//import { Button } from "expo-router/build/react-navigation";
//searched from google AI to find out how to set imageSrc
type propsType = {
  title: string;
  titleColor?: string;
  positionColor?: string;
  position: string;
  imageSrc: ImageSourcePropType;
};

const CandidateBox: React.FC<propsType> = ({
  title,
  titleColor = "black",
  positionColor = "black",
  position,
  imageSrc,
}) => {
  return (
    <View style={defaultSyles.containerCandidates}>
      <Image style={defaultSyles.imageCand} source={imageSrc} />
      <View style={{ flex: 3, flexDirection: "column" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: titleColor,
            marginBottom: 3,
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 25, color: positionColor }}>{position}</Text>
      </View>
    </View>
  );
};

export default CandidateBox;
