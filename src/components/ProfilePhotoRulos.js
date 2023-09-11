import { View, Text, StyleSheet,Image,Dimensions,FlatList} from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');


export default function ProfilePhotoRulos() {
    const data = [
        { id: 1, image: require('../assets/acun4.jpg') },
        { id: 2, image: require('../assets/acun2.jpg') },
        { id: 3, image: require('../assets/acun3.jpg') },
        { id: 4, image: require('../assets/acun1.jpg') },
        { id: 5, image: require('../assets/acun.jpg') },
        // Add more images here...
      ];
      const numColumns = 3;

  return (
    <View style={styles.container}>
      
      <FlatList
        data={data}
        renderItem={({item})=>(
            <View style={styles.photoContainer}>
                <Image source={item.image} style={styles.photo} />
            </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    photoContainer:{
        width:width/3,
        height:150,
        paddingRight:2,
        paddingBottom:2
        

    },
    photo:{
        width:'100%',
        height:'100%'
    }
})