import React from "react"
import { Link, StyleSheet } from "@react-pdf/core"

export default props => {
  const sizes = {
    large: 14,
    normal: 10,
  }

  const styles = StyleSheet.create({
    link: {
      fontSize: sizes[props.size || "normal"],
      fontFamily: "YasashisaAntique",
      padding: 2,
      ...props.style,
    },
  })

  return <Link style={styles.link}>{props.children}</Link>
}
