import { View, Text ,SafeAreaView,StyleSheet,StatusBar,Image,FlatList,RefreshControl} from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import HomePost from '../components/HomePost';
import { ScrollView } from 'react-native';
import Story from '../components/Story';


export default function Home() {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh=()=>{
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }


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
      <View style={styles.scrolDiv}>
        <ScrollView style={styles.ScrolHome} 
         refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >
          <View style={styles.storyDiv}>
          <FlatList
          style={{height:'100%'}}
            data={data}
            renderItem={({item}) => 
                <Story item={item}/>
          }
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
            
          </View>
          <View style={styles.contentDiv}>{/* uzunuğu içeriğe bağlı olarak ayarlandı */}
              <HomePost/>
              <HomePost/>
          </View>
        </ScrollView>
      </View>
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
    paddingLeft:5,
    borderBottomWidth:0.5,
    borderBottomColor:'gray',
    // backgroundColor:'yellow',
    height:100
  },
  contentDiv:{

  },
  iconDiv:{
    flex:0.8,
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:10
  },
  scrolDiv:{
    flex:15,
    // backgroundColor:'red'
  },
  ScrolHome:{
    flex:1,
  },

})