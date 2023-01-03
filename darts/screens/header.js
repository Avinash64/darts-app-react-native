import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Header() {
  return (
    <View style={styles.header} >
    {/* <Text>Header</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1a53ad",
        height:"4.5%"
    },
  });
  

export default Header