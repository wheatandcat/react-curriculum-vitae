import React from "react";
import { View } from "@react-pdf/core";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

export default props => (
  <View>
    <Text size="small" style={{ textAlign: "right" }}>
      {props.createDate}
    </Text>
    <Title>{props.title}</Title>
  </View>
);
