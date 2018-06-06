import React from "react";
import { Page, View, StyleSheet } from "@react-pdf/core";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Link from "../atoms/Link";
import Br from "../atoms/Br";
import { Grid, Col } from "../atoms/Grid";
import JonHistory from "../organisms/JonHistory/Board";
import { Period, Content, Using } from "../molecules/JonHistory";
import secret from "../../secret.json";

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
          <Text>年齢</Text>
        </Col>
        <Col size={2} borderRight>
          <Text>29</Text>
        </Col>
        <Col subTitle borderRight>
          <Text>性別</Text>
        </Col>
        <Col size={2} borderRight>
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
            justifyContent: "center"
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
        <Col size={5.15} borderRight>
          <Text>react、react-native、go言語、graphql、GCP</Text>
        </Col>
      </Grid>
      <Br />
      <Br />
      <Br />
      <JonHistory
        items={[
          {
            name: "期間"
          },
          {
            name: "職業先"
          },
          {
            name: "業務内容",
            size: 3
          },
          {
            name: "使用技術"
          },
          {
            name: "契約・雇用形態"
          }
        ]}
      >
        <Grid borderTop>
          <Col borderRight>
            <Period date="2017/12〜現在" period="6ヶ月" />
          </Col>
          <Col borderRight>
            <Text size="small">{secret.companyNames[0]}</Text>
          </Col>
          <Col borderRight size={3}>
            <Content
              abouts={["スマホアプリ / Webサービス開発"]}
              contents={[
                "メイン作業はアプリ、Webのフロント実装",
                "アプリの自動デプロイ実装（Fabric、fastlane）",
                "Firebase連携実装",
                "GraphQLのサーバー、フロント実装",
                "サブ作業でgolangのサーバー実装（GAE）"
              ]}
            />
          </Col>
          <Col borderRight>
            <Using
              uses={[
                "GCP",
                "Firebase",
                "gRPC",
                "graphql",
                "golang",
                "Node.js",
                "TypeScript",
                "react",
                "react-native"
              ]}
            />
          </Col>
          <Col>
            <Text size="small">フリーランス</Text>
          </Col>
        </Grid>

        <Grid borderTop>
          <Col borderRight>
            <Period date="2017/04〜2017/12" period="9ヶ月" />
          </Col>
          <Col borderRight>
            <Text size="small">{secret.companyNames[1]}</Text>
          </Col>
          <Col borderRight size={3}>
            <Content
              abouts={["Webサービス開発"]}
              contents={[
                "メイン作業はWebのフロント実装",
                "e2eテスト、パフォーマンス計測の実装",
                "フロント作業以外にもawsの構築のコード化をterraformで実装"
              ]}
            />
          </Col>
          <Col borderRight>
            <Using
              uses={["aws", "Lambda", "terraform", "java", "flow", "react"]}
            />
          </Col>
          <Col>
            <Text size="small">フリーランス</Text>
          </Col>
        </Grid>

        <Grid borderTop>
          <Col borderRight>
            <Period date="2016/06〜2017/2" period="8ヶ月" />
          </Col>
          <Col borderRight>
            <Text size="small">{secret.companyNames[2]}</Text>
          </Col>
          <Col borderRight size={3}>
            <Content
              abouts={["ソーシャルゲーム開発"]}
              contents={[
                "バックエンド実装",
                "Socket通信の負荷改善",
                "DBの負荷改善",
                "キャッシュの改善",
                "テスト改善"
              ]}
            />
          </Col>
          <Col borderRight>
            <Using
              uses={[
                "PHP",
                "Phalcon",
                "Node.js",
                "ansible",
                "Chef",
                "MySQL",
                "Redis",
                "Unity"
              ]}
            />
          </Col>
          <Col>
            <Text size="small">フリーランス</Text>
          </Col>
        </Grid>
      </JonHistory>
    </View>
  </Page>
);

// Create styles
const styles = StyleSheet.create({
  screen: {
    padding: 10
  },
  section: {
    padding: 3,
    paddingLeft: 10,
    flexGrow: 3,
    borderColor: "#aaaaaa",
    borderWidth: 1
  },
  subTitle: {
    padding: 3,
    flexGrow: 1,
    backgroundColor: "#E4E4E4",
    borderColor: "#aaaaaa",
    borderWidth: 1
  }
});
