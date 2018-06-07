import React, { Fragment } from "react";
import { View } from "@react-pdf/core";
import { Grid, Col } from "../../atoms/Grid";
import Text from "../../atoms/Text";

export default props => (
  <Fragment>
    <Col
      subTitle
      borderLeft
      borderRight
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Text>自己PR</Text>
    </Col>
    <Col size={props.size || 5} borderRight>
      {props.children}
    </Col>
  </Fragment>
);
