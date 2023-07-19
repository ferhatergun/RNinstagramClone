import { View, Text ,StyleSheet,TextInput,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import  IconIo  from 'react-native-vector-icons/Ionicons'

export default function Search() {
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior="height"
    >
      <View style={styles.searchBarDiv}>
        <View style={styles.searchBar}>
            <IconIo name='search-outline' size={30} />
            <TextInput style={styles.searchBarInput}/>
        </View>
      </View>
      <View style={styles.content}></View>
    </KeyboardAvoidingView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  searchBarDiv:{
    flex:1,
    // backgroundColor:'pink'
  },
  content:{
    flex:10,
    // backgroundColor:'yellow'
  },
  searchBar:{
    flexDirection:'row',
    backgroundColor:'lightgray',
    marginHorizontal:10,
    marginTop:20,
    alignItems:'center',
    paddingHorizontal:5,
    borderRadius:15

  },
  searchBarInput:{
    height:40,
    width:'100%'
  }
})