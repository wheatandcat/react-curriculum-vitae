import React from "react"
import { Page, Text, View, StyleSheet } from "@react-pdf/core"

export default () => (
  <Page size="A4">
    <View>
      <Text style={styles.title}>職務経歴書</Text>
    </View>
    <View>
      <Text>Section #1</Text>
    </View>
    <View>
      <Text>Section #2</Text>
    </View>
  </Page>
)

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    fontFamily: "NotoSansCJKjp",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})
