import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import PDF from "react-pdf-js";
import ReactPDF from "@react-pdf/node";
import { Document, Font } from "@react-pdf/core";
import Page from "./components/pages/Page";

Font.register(`${__dirname}/fonts/07YasashisaAntique.otf`, {
  family: "YasashisaAntique"
});

Font.register(`${__dirname}/fonts/Nasu-Regular.ttf`, {
  family: "Nasu-Regular"
});

Font.register(`${__dirname}/fonts/Nasu-Bold.ttf`, {
  family: "Nasu-Bold"
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page />
  </Document>
);

const App = () => (
  <div>
    <MyDocument />
  </div>
);

if (process.env.NODE_ENV === "production") {
  ReactPDF.render(<MyDocument />, `${__dirname}/../build/build.pdf`);
} else {
  ReactDOM.render(
    <div>
      <PDF file="build.pdf" fillWidth fillHeight />
    </div>,
    document.getElementById("root")
  );
}
