import React from 'react'
import { ScrollView, View, Text, StyleSheet} from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

const Publications = (props) => {
  return (<View style={styles.container}>
    <PDFReader
    source={{
    uri: props.pdfUrl
    }}
    />
   </View>
   )
};

export default Publications;


 const styles = StyleSheet.create({
   container: {
    marginVertical: 10,
    width: 330,
    height: 480,
   }
 })