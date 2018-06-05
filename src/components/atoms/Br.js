import React from "react";
import { View, StyleSheet } from "@react-pdf/core";

export default props => {
  const styles = StyleSheet.create({
    br: {
      padding: 3,
      ...props.style
    }
  });

  return <View style={styles.br} />;
};
