import React from 'react';
import { pdfjs } from "react-pdf";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Reporta() {
  return (
    <div>Reporta</div>
  )
}

export default Reporta








