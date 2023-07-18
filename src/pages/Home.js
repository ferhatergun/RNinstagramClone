import { View, Text ,SafeAreaView,StyleSheet} from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabHeader}>
        <Text>Instagram</Text>
      </View>
      <View style={styles.storyDiv}></View>
      <View style={styles.contentDiv}></View>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  tabHeader:{
    flex:1,
    backgroundColor:'yellow'
  },
  storyDiv:{
    flex:1,
    backgroundColor:'purple'
  },
  contentDiv:{
    flex:5,
    backgroundColor:'gray'
  }
})