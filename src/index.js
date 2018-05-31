import "regenerator-runtime/runtime"
import React from "react"
import ReactDOM from "react-dom"
import ReactPDF from "@react-pdf/node"
import { Document, Font } from "@react-pdf/core"
import Page from "./components/pages/Info/Page"

Font.register(`${__dirname}/fonts/NotoSansCJKjp-Light.otf`, {
  family: "NotoSansCJKjp",
})

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page />
  </Document>
)

const App = () => (
  <div>
    <MyDocument />
  </div>
)

if (process.env.NODE_ENV === "production") {
  ReactPDF.render(<MyDocument />, `${__dirname}/../example.pdf`)
} else {
  ReactDOM.render(<App />, document.getElementById("root"))
}
