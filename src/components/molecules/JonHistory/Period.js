import React, { Fragment } from "react";
import { View } from "@react-pdf/core";
import { Grid, Col } from "../../atoms/Grid";
import Text from "../../atoms/Text";

export default props => (
  <Fragment>
    <Text size="small" blod>
      【年月】
    </Text>
    <View style={{ marginBottom: 5 }}>
      <Text size="small">・{props.date}</Text>
    </View>
    <Text size="small" blod>
      【期間】
    </Text>
    <View>
      <Text size="small">・{props.period}</Text>
    </View>
  </Fragment>
);
