import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Search = () => {
  return (
    <View style={styles.container}>
      <Text className='text-white flex justify-center items-center font-bold text-2xl'>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
})