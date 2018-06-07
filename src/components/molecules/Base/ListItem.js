import React, { Fragment } from "react";
import { View } from "@react-pdf/core";
import { Grid, Col } from "../../atoms/Grid";
import Text from "../../atoms/Text";

export default props => (
  <Fragment>
    <Col subTitle borderLeft={props.borderLeft} borderRight={props.borderRight}>
      <Text>{props.lable}</Text>
    </Col>
    <Col size={props.size || 2} borderRight>
      <Text>{props.children}</Text>
    </Col>
  </Fragment>
);
