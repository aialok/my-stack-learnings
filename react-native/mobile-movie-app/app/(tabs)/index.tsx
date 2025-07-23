import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the app</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
  }
});
