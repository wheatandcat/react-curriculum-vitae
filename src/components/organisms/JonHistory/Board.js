import React from "react";
import { Grid, Col } from "../../atoms/Grid";
import Text from "../../atoms/Text";

export default props => (
  <Grid borderTop borderBottom>
    <Col
      borderLeft
      borderRight
      style={{
        backgroundColor: "#7fbfff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Text>職務履歴</Text>
    </Col>
    <Col size={4.55} borderRight style={{ padding: 0 }}>
      <Grid>
        {props.items.map((item, index) => (
          <Col
            subTitle
            borderRight={index !== props.items.length - 1}
            key={index}
            size={item.size || 1}
            borderLeft={item.borderLeft || false}
          >
            <Text size={"small"}>{item.name}</Text>
          </Col>
        ))}
      </Grid>
      {props.children}
    </Col>
  </Grid>
);
