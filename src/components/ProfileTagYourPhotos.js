import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import  IconMI from 'react-native-vector-icons/MaterialIcons'


export default function ProfileTagYourPhotos() {
  return (
    <View style={styles.container}>
        <IconMI name='people-outline' size={80} style={styles.Icon} />
       <Text style={styles.Text1}>Olduğun Fotoğraf ve Videolar</Text>
       <Text style={styles.Text2}>İnsanlar seni fotoğraf ve videolarda etiketlediğinde burada görünecek</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    marginTop:40

  },
  Icon:{
    borderWidth:2,
    borderColor:'black',
    width:100,
    borderRadius:70,
    padding:10,
    alignItems:'center',
  },
  Text1:{
    marginTop:5,
    fontSize:20,
    fontWeight:500
  },
  Text2:{
    paddingHorizontal:50,
    color:'gray',
    marginTop:10
  }
})