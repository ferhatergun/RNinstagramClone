import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import {  } from 'react-native'

export default function ProfilePostVideo() {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}><Text>sayfa1</Text></View>
      <View style={styles.tabBar}><Text>sayfa2</Text></View>
      <View style={styles.tabBar}><Text>sayfa3</Text></View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'red',
        flexGrow:1,
        flexDirection:'row'
    },
    tabBar:{
        backgroundColor:'lightblue',
        flex:1,
        width:400
        // borderWidth:2,
        // borderColor:'red'
    }
})