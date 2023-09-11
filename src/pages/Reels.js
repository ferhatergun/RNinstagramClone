import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, Dimensions, TouchableWithoutFeedback, FlatList, Text,Image,TouchableOpacity} from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { useNavigationState } from '@react-navigation/native';
import  IconIo  from 'react-native-vector-icons/Ionicons';
import  IconFa  from 'react-native-vector-icons/Feather';
import  IconEn  from 'react-native-vector-icons/Entypo';

const windowHeight = Dimensions.get('window').height-69;
const windowWidth = Dimensions.get('window').width;

const videoData = [
  { id: 1, uri: require("../assets/reels1.mp4") },
  { id: 2, uri: require("../assets/reels2.mp4") }
];

export default function Reels() {
  const [status, setStatus] = useState({});
  const [activeView, setActiveView] = useState(1);
  const scrollRef = useRef(null);
  const videoRefs = useRef([]);

  const state = useNavigationState(state => state);

  const handleScroll = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const viewIndex = Math.round(contentOffsetY / (windowHeight));
    setActiveView(viewIndex + 1);
  };

  const setVideoRef = (index, ref) => {
    videoRefs.current[index] = ref;
  };

  useEffect(() => {
    if (state.index !== 3) {
      for (let i = 0; i < videoRefs.current.length; i++) {
        videoRefs.current[i].pauseAsync();
      }
    }
  }, [state]);

  const renderItemVideo = (item, index) => {
    return (
      <>
      <View style={styles.videos1}>
        <TouchableWithoutFeedback
          onPressIn={() => videoRefs.current[index].pauseAsync()}
          onPressOut={() => videoRefs.current[index].playAsync()}
          delayPressIn={500}
        >
          <Video
            ref={(ref) => setVideoRef(index, ref)}
            style={styles.videoPlayer}
            source={item.uri}
            isMuted={false}
            resizeMode={ResizeMode.COVER}
            shouldPlay={item.id === activeView ? true : false}
            isLooping={true}
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </TouchableWithoutFeedback>
      </View>
       <View style={styles.videoButtons}>
        <View style={styles.rightButtons}>
          <View style={styles.profile}>
              <Image  source={require("../assets/acun.jpg")}  style={styles.photo}/>
              <Text style={{color:'white',marginLeft:5}}>acunilicali</Text>
              <TouchableOpacity style={styles.followButton}>
                <Text style={{color:'white'}}>Takip Et</Text>
              </TouchableOpacity>
          </View>
          <Text style={{color:'white',marginLeft:20,marginTop:20}}>Selamlar Video Deneme 3 2 1</Text>
        </View>
        <View style={styles.leftButtons}>
          <IconIo name='heart-outline' size={25}  style={{color:'white'}}/> 
          <Text style={{color:'white'}}>28.8bin</Text>
          <IconIo name='chatbubble-outline' size={25} style={{marginTop:25,color:'white'}} />
          <Text style={{color:'white'}}>900</Text>
          <IconFa name='send' size={25} style={{marginTop:25,color:'white'}} />
          <Text style={{color:'white'}}>128</Text>
          <IconEn name='dots-three-vertical' size={22} style={{marginTop:25,color:'white'}} />
        </View>
      </View> 
      </>
    );
  };

  const scrollTo = () => {
    scrollRef.current.scrollToIndex({ animated: true, index: activeView - 1, viewPosition: 1 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <FlatList
        ref={scrollRef}
        onScroll={handleScroll}
        style={{ height: '100%', width: '100%' }}
        data={videoData}
        onMomentumScrollEnd={() => scrollTo()}
        renderItem={({ item, index }) =>
          renderItemVideo(item, index)
        }
        keyExtractor={(item) => item.id.toString()} // Converted to string
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  videos1: {
    height: windowHeight , // tab bar uzunluğunu çıkarttık,
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
  videoButtons:{
    // backgroundColor:'yellow',
    position:"absolute",
    width:'100%',
    marginTop:windowHeight-windowHeight/3,
    height:windowHeight/3,
    flexDirection:'row',
  },
  leftButtons:{
    // backgroundColor:'red',
    alignItems:'center',
    width:'20%'
  },
  rightButtons:{
    // backgroundColor:'blue',
    width:'80%'
  },
  photo:{
    width:40,
    height:40,
    borderRadius:50,
    marginLeft:20
  },
  followButton:{
    borderWidth:1,
    borderColor:'white',
    borderRadius:10,
    width:90,
    height:30,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:5
  },
  profile:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop:'40%',

  }


});
