import React, { useState, useEffect } from 'react';
import { Button, Image, View,Text,FlatList } from 'react-native';
import * as MediaLibrary from "expo-media-library";

export default function NewPost() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAndDisplayImages();
  }, []);

  const getAndDisplayImages = async () => {
    try {
      const { assets } = await MediaLibrary.getAlbumAsync("ferhat");
      setImages(assets); // Galeriden alınan fotoğrafları images dizisine depola
    } catch (error) {
      console.log('Error fetching images:', error);
    }
  };

  console.log(images)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>hello</Text>
     <FlatList 
     data={images}
     style={{ height: '100%', width: '100%' }}
     renderItem={(item,index)=>
      // <Image source={item.uri} key={index} style={{width:10,height:10}}></Image>
      <Text key={index}>{item.uri}</Text>
     }
     />
    </View>
  );
}
