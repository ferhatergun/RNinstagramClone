import { View, Text ,SafeAreaView,StyleSheet,StatusBar,Image,FlatList} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";


export default function Home() {

  const data = [
    {
      uri: require('../assets/acun.jpg'),
      name: 'acunilicali',
      id: '1'
    },
    {
      uri: require('../assets/demet.jpg'),
      name: 'demetakalin',
      id: '2',
    },
    {
      uri: require('../assets/enes.jpg'),
      name: 'enesbatur',
      id: '3'
    },
    {
      uri: require('../assets/ufuk.jpg'),
      name: 'ufuközkan',
      id: '4'
    },
    {
      uri: require('../assets/acun.jpg'),
      name: 'acunilicali',
      id: '5'
    },
    {
      uri: require('../assets/demet.jpg'),
      name: 'demetakalin',
      id: '6',
    },
    {
      uri: require('../assets/enes.jpg'),
      name: 'enesbatur',
      id: '7'
    },
    {
      uri: require('../assets/ufuk.jpg'),
      name: 'ufuközkan',
      id: '8'
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* tab bar start */}
      <View style={styles.tabHeader}>
        <View style={styles.headertextDiv}>
          <Text style={styles.headertext}>Instagram</Text>
        </View>
          <View style={styles.iconDiv}>
          <Icon name="heart-outline" size={30}/>
          <Icon name="chatbox-ellipses-outline" size={30}/>
        </View>
      </View>
      {/* story start */}
      <View style={styles.storyDiv}>
      <FlatList
      style={{height:'100%'}}
        data={data}
        renderItem={({item}) => 
            <View style={styles.story}>
              <Image source={item.uri} style={styles.storyImage} />
              <Text style={styles.storyText}>{item.name}</Text>
            </View>
      }
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
        
      </View>
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
    flex:1.8,
    flexDirection:'row',
    alignItems:'flex-start',
    paddingLeft:5

  },
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
  contentDiv:{
    flex:10,
    backgroundColor:'gray'
  },
  iconDiv:{
    flex:0.8,
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:10
  },

})