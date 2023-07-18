import { View, Text ,SafeAreaView,StyleSheet,StatusBar} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content"  />
      <View style={styles.tabHeader}>
        <View style={styles.headertextDiv}>
          <Text style={styles.headertext}>Instagram</Text>
        </View>
          <View style={styles.iconDiv}>
          <Icon name="heart-outline" size={30}/>
          <Icon name="chatbox-ellipses-outline" size={30}/>
        </View>
        
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
    flex:0.7,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center'
  },
  headertextDiv:{
    flex:3,
  },
  headertext:{
    fontSize:20
  },
  storyDiv:{
    flex:1.5,
    backgroundColor:'purple'
  },
  contentDiv:{
    flex:10,
    backgroundColor:'gray'
  },
  iconDiv:{
    flex:0.8,
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:10
  }
})