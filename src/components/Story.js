import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function Story({item}) {
  return (
    <View style={styles.story}>
        <Image source={item.uri} style={styles.storyImage} />
        <Text style={styles.storyText}>{item.name}</Text>
  </View>
  )
}

const styles=StyleSheet.create({
    story:{
        width:75,
        height:75,
        borderRadius:50,
        borderWidth:2,
        borderColor:'pink',
        padding:2,
        marginLeft:8
      },
      storyImage:{
        width:'100%',
        height:'100%',
        borderRadius:50
      },
      storyText:{
        textAlign:'center',
        marginTop:5,
        fontSize:12
      },
})