import React from "react";
import { Text, StyleSheet } from "@react-pdf/core";

export default props => {
  const sizes = {
    large: 14,
    normal: 10,
    small: 6
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: sizes[props.size || "normal"],
      fontFamily: props.blod ? "Nasu-Bold" : "Nasu-Regular",
      padding: 1,
      ...props.style
    }
  });

  return <Text style={styles.text}>{props.children}</Text>;
};
