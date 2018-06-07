import React from "react";
import { Page, View, StyleSheet } from "@react-pdf/core";
import Text from "../atoms/Text";
import Title from "../molecules/Title";
import Link from "../atoms/Link";
import Br from "../atoms/Br";
import { Grid, Col } from "../atoms/Grid";
import JobHistory from "../organisms/JobHistory/Board";
import { Period, Content, Using } from "../molecules/JonHistory";
import { ListItem, PR } from "../molecules/Base";

const secret =
  process.env.ENV === "production"
    ? require("../../secret.json")
    : require("../../secret.develop.json");

export default () => (
  <Page size="A4">
    <View style={styles.screen}>
      <Title title="職務経歴書" createDate="作成日: 2018年06月07日" />
      <Grid borderTop>
        <ListItem lable="名前" borderLeft borderRight>
          {secret.name}
        </ListItem>
        <ListItem lable="現住所(都道府県)" borderRight>
          東京
        </ListItem>
      </Grid>
      <Grid borderTop>
        <ListItem lable="年齢" borderLeft borderRight>
          29
        </ListItem>
        <ListItem lable="性別" borderRight>
          男
        </ListItem>
      </Grid>

      <Grid borderTop>
        <PR>
          <View>
            <Text>
              現在フリーランスのエンジニアとしてフロントエンドをメインに活動しています。
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
        </PR>
      </Grid>

      <Grid borderTop borderBottom>
        <ListItem lable="勉強している技術" borderLeft borderRight size={5.15}>
          react、react-native、go言語、graphql、GCP
        </ListItem>
      </Grid>
      <Br />
      <Br />
      <Br />
      <JobHistory
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
                "サブ作業でgolangのバックエンド実装（GAE）"
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
                "サブ作業でaws構築のコード化をterraformで実装"
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
              abouts={["ネイティブアプリ ソーシャルゲーム開発"]}
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

        <Grid borderTop>
          <Col borderRight>
            <Period date="2013/04〜2016/5" period="3年1ヶ月" />
          </Col>
          <Col borderRight>
            <Text size="small">{secret.companyNames[3]}</Text>
          </Col>
          <Col borderRight size={3}>
            <Content
              abouts={["Webブラウザ ソーシャルゲーム開発"]}
              contents={["バックエンド実装", "Socket通信の実装", "SPA実装"]}
            />
          </Col>
          <Col borderRight>
            <Using uses={["PHP", "Node.js", "MySQL", "Backbone.js"]} />
          </Col>
          <Col>
            <Text size="small">正社員</Text>
          </Col>
        </Grid>

        <Grid borderTop>
          <Col borderRight>
            <Period date="2012/04〜2013/3" period="11ヶ月" />
          </Col>
          <Col borderRight>
            <Text size="small">{secret.companyNames[4]}</Text>
          </Col>
          <Col borderRight size={3}>
            <Content
              abouts={["クレジットの支払い / 管理システム開発"]}
              contents={["バックエンド実装"]}
            />
          </Col>
          <Col borderRight>
            <Using uses={["java", "Perl", "MySQL"]} />
          </Col>
          <Col>
            <Text size="small">正社員</Text>
          </Col>
        </Grid>
      </JobHistory>
    </View>
  </Page>
);

// Create styles
const styles = StyleSheet.create({
  screen: {
    padding: 10
  }
});
