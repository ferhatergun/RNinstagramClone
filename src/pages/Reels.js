import { View, Text ,SafeAreaView,StatusBar,StyleSheet} from 'react-native'
import React from 'react'

export default function Reels() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white"  />
      <Text>Reels</Text>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})