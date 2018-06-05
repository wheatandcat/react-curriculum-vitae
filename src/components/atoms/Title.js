import React from "react";
import { StyleSheet } from "@react-pdf/core";
import Text from "./Text";

export default props => (
  <Text style={styles.title} size="large">
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 6
  }
});
