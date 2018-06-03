import React from "react"
import { Page, View, StyleSheet } from "@react-pdf/core"
import Text from "../atoms/Text"
import Title from "../atoms/Title"
import Link from "../atoms/Link"
import Br from "../atoms/Br"
import { Grid, Col } from "../atoms/Grid"
import secret from "../../secret.json"

export default () => (
  <Page size="A4">
    <View style={styles.screen}>
      <View>
        <Text size="small" style={{ textAlign: "right" }}>
          作成日: 2018年06月04日
        </Text>
        <Title>職務経歴書</Title>
      </View>
      <Grid borderTop>
        <Col subTitle borderLeft borderRight>
          <Text>名前</Text>
        </Col>
        <Col size={2} borderRight>
          <Text>飯野 陽平</Text>
        </Col>
        <Col subTitle borderRight>
          <Text>現住所(都道府県)</Text>
        </Col>
        <Col size={2} borderRight>
          <Text>東京</Text>
        </Col>
      </Grid>
      <Grid borderTop>
        <Col subTitle borderLeft borderRight>
          <Text>現住所(都道府県)</Text>
        </Col>
        <Col size={2} borderRight>
          <Text>東京</Text>
        </Col>
        <Col subTitle borderRight>
          <Text>年齢</Text>
        </Col>
        <Col size={2} borderRight>
          <Text>28</Text>
        </Col>
      </Grid>
      <Grid borderTop>
        <Col subTitle borderLeft borderRight>
          <Text>性別</Text>
        </Col>
        <Col size={5.3} borderRight>
          <Text>男</Text>
        </Col>
      </Grid>
      <Grid borderTop>
        <Col
          subTitle
          borderLeft
          borderRight
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>自己PR</Text>
        </Col>
        <Col size={5} borderRight>
          <View>
            <Text>
              現在フリーランスとしてフロントエンドエンジニアをメインに活動しています。
            </Text>
            <Text>
              他にもバックエンド、インフラ、ネィティブアプリと幅広く業務で活動しています。
            </Text>
            <Br />
            <Br />
            <Text>
              github:<Link>https://github.com/wheatandcat</Link>
            </Text>
            <Text>
              npm:<Link>https://www.npmjs.com/~wheatandcat</Link>
            </Text>
            <Text>
              qiita:<Link>https://qiita.com/wheatandcat</Link>
            </Text>
            <Br />
            <Text>
              個人開発したWEBサービス: <Link>https://dotstamp.com/</Link>
            </Text>
            <View style={{ paddingLeft: 5 }}>
              <Text>github:</Text>
              <Text>
                ・<Link>https://github.com/wheatandcat/dotstamp_client</Link>
              </Text>
              <Text>
                ・<Link>https://github.com/wheatandcat/dotstamp_server</Link>
              </Text>
            </View>
            <Br />
            <Text>
              最近作ったexamples:{" "}
              <Link>https://github.com/wheatandcat/react-graphql-examples</Link>
            </Text>
            <View style={{ paddingLeft: 5 }}>
              <Text>
                ・使用技術：GCP、Firebase、GraphQL、react、react-native、appetize.io
              </Text>
            </View>
          </View>
        </Col>
      </Grid>
      <Grid borderTop borderBottom>
        <Col subTitle borderLeft borderRight>
          <Text>勉強している技術</Text>
        </Col>
        <Col size={5.3} borderRight>
          <Text>react、react-native、go言語、graphql、GCP</Text>
        </Col>
      </Grid>
      <Br />
      <Br />
      <Br />
      <Grid borderTop borderBottom>
        <Col
          borderLeft
          borderRight
          style={{
            backgroundColor: "#7fbfff",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>職務履歴</Text>
        </Col>
        <Col size={4.55} borderRight style={{ padding: 0 }}>
          <Grid>
            <Col subTitle borderRight>
              <Text size="small">期間</Text>
            </Col>
            <Col subTitle borderRight>
              <Text size="small">職業先</Text>
            </Col>
            <Col subTitle borderRight size={2}>
              <Text size="small">業務内容</Text>
            </Col>
            <Col subTitle borderRight borderLeft>
              <Text size="small">使用技術</Text>
            </Col>
            <Col subTitle>
              <Text size="small">契約・雇用形態</Text>
            </Col>
          </Grid>
          <Grid borderTop>
            <Col borderRight>
              <Text size="small">【年月】</Text>
              <Text size="small"> 2017/12〜現在</Text>
              <Text size="small">【期間】</Text>
              <Text size="small"> 6ヶ月</Text>
            </Col>
            <Col borderRight>
              <Text size="small">{secret.companyNames[0]}</Text>
            </Col>
            <Col borderRight size={2}>
              <Text />
            </Col>
            <Col borderRight borderLeft>
              <Text>使用技術</Text>
            </Col>
            <Col>
              <Text>契約・雇用形態</Text>
            </Col>
          </Grid>
        </Col>
      </Grid>
    </View>
  </Page>
)

// Create styles
const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  section: {
    padding: 3,
    paddingLeft: 10,
    flexGrow: 3,
    borderColor: "#aaaaaa",
    borderWidth: 1,
  },
  subTitle: {
    padding: 3,
    flexGrow: 1,
    backgroundColor: "#E4E4E4",
    borderColor: "#aaaaaa",
    borderWidth: 1,
  },
})
