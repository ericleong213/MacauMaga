import * as React from "react";
import { View, Text } from "react-native";
import PDFReader from "rn-pdf-reader-js";

const pdfReader = () => {
  return (
    <>
      <View style={{ height: "100%" }}>
        <PDFReader
          withScroll={false}
          useGoogleDriveViewer={true}
          source={{
            uri: "https://images.io.gov.mo/bo/i/2021/24/bo-i-24-sup-2021.pdf",
          }}
        />
        <Text>sample</Text>
      </View>
    </>
  );
};

export default pdfReader;
