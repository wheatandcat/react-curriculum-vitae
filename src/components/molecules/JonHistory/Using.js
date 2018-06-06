import React from "react";
import { View } from "@react-pdf/core";
import Text from "../../atoms/Text";

export default props => (
  <View>
    {props.uses.map((use, index) => (
      <Text size="small" key={index}>
        {use}
      </Text>
    ))}
  </View>
);
