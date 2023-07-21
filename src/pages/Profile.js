import { View, Text ,StyleSheet, ScrollView ,Image,Dimensions} from 'react-native'
import React, { useState ,useRef} from 'react'
import  IconIo  from 'react-native-vector-icons/Ionicons'
import  IconMC  from 'react-native-vector-icons/MaterialCommunityIcons'
import  IconMI  from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import ProfileOneCikarilanlar from '../components/ProfileOneCikarilanlar'
import ProfilePhotoRulos from '../components/ProfilePhotoRulos'
import ProfileReels from '../components/ProfileReels'
import ProfileTagYourPhotos from '../components/ProfileTagYourPhotos'

const { width } = Dimensions.get('window');


export default function Profile() {
  const [scrollWidth,setScrollWidth]=useState(0)
  const scrollRef=useRef(null)

  const scrollToIndex=(pageIndex)=>{
    scrollRef.current.scrollTo({ x: width*pageIndex, y: 0, animated: true })
  }
  // console.log(scrollRef.current._internalFiberInstanceHandleDEV.ref)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextDiv}>
          <Text style={styles.headerText}>demetakalin</Text>
          <IconMI name='verified' color="blue" size={20}  style={{marginLeft:5}}/>
        </View>
        <View style={styles.headerIcon}>
            <IconIo name='add-circle-outline' size={30} />
            <IconIo name='menu-outline' size={30} />
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.photoAndInformation}>
            <View style={styles.photoDiv}>
              <Image  source={require("../assets/demet.jpg")}  style={styles.photo}/>
            </View>
            <View style={styles.information}>
              <View style={styles.textDiv}>
                <Text style={styles.informationText}>2</Text>
              <Text>Gönderi</Text>
              </View>
              <View style={styles.textDiv}>
                <Text style={styles.informationText}>167</Text>
              <Text>Takipçi</Text>
              </View>
              <View style={styles.textDiv}>
                <Text style={styles.informationText}>206</Text>
              <Text>Takip</Text>
              </View>
            </View>
          </View>
          <View style={styles.nameButtonFrontDiv}>
            <Text style={{fontWeight:500}}>Demet Akalın</Text>
            <Text style={{color:"#828282"}}>Sanatçı</Text>
            <Text>Pop signer /Demet Akalın resmi hesabı</Text>
            <Text>İletişim için demetakalin@gmail.com</Text>
            <View style={styles.butttonDiv}>
              <TouchableOpacity style={styles.button}>
                <Text style={{fontWeight:500}}>Profili Düzenle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={{fontWeight:500}}>Profili Paylaş</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonIcon}>
                <IconIo name='person-add-outline' size={20}  />
              </TouchableOpacity>
            </View>
            <View style={styles.onecikarlilanlarDiv}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <ProfileOneCikarilanlar />
              </ScrollView>
            </View>
          </View>
          <View style={styles.scrollPostVideo}>
            <View style={styles.scrolTabbar}>
              <IconMC name='dots-square' size={30} onPress={()=>scrollToIndex(0)}   
              style={(scrollWidth>=0 && scrollWidth<=(width/2)) ? styles.scrolTabbarIconActive:styles.scrolTabbarIcon}/>
              <IconIo name='film-outline' size={30}  onPress={()=>scrollToIndex(1)}  
              style={(scrollWidth>(width/2) && scrollWidth<=((3*width)/2)) ? styles.scrolTabbarIconActive:styles.scrolTabbarIcon}/>
              <IconMI name='people-outline' size={30}  onPress={()=>scrollToIndex(2)} 
              style={(scrollWidth>((3*width)/2) && scrollWidth<=(3*width)) ? styles.scrolTabbarIconActive:styles.scrolTabbarIcon}/>
            </View>
            <ScrollView horizontal style={{flexGrow:1}}  ref={scrollRef}
            onScroll={(e)=>setScrollWidth(e.nativeEvent.contentOffset.x)}
              onMomentumScrollEnd={() => {
              if ( scrollWidth > 0 && scrollWidth <= 200) {
                scrollToIndex(0)
              } else if ( scrollWidth >200 && scrollWidth <= 600) {
                scrollToIndex(1)
              } else if(scrollWidth>600 && scrollWidth <= 800) {
                scrollToIndex(2)
              }
            }} 
            >
              <View style={styles.ScrollPage}>
                <ProfilePhotoRulos />
              </View>
              <View style={styles.ScrollPage}>
                <ProfileReels />
              </View>
              <View style={styles.ScrollPage}>
                <ProfileTagYourPhotos />
              </View>
            </ScrollView>

          </View>
        </ScrollView>
      </View>
      
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'

  },
  header:{
    flex:1,
    // backgroundColor:'yellow',
    flexDirection:"row",
    paddingHorizontal:15,
    alignItems:'center'
  },
  content:{
    flex:10,
  },
  headerTextDiv:{
    flex:7,
    flexDirection:'row',
    alignItems:'center',
    

  },
  headerText:{
    fontSize:25,
    fontWeight:500

  },
  headerIcon:{
    flex:2,
    flexDirection:'row',
    justifyContent:'space-around'

  },
  photoAndInformation:{
    flexDirection:'row',
    height:100,
    paddingHorizontal:15,
    alignItems:'center'
  },
  photoDiv:{
    width:'30%',
  },
  photo:{
    width:80,
    height:80,
    borderRadius:50,
    marginLeft:10
  },
  information:{
    flexDirection:'row',
    width:'70%',
    justifyContent:'space-around'
  },
  textDiv:{
    alignItems:'center',
  },
  informationText:{
    fontWeight:500,
    fontSize:18
  },
  nameButtonFrontDiv:{
    paddingHorizontal:15,
  },
  butttonDiv:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  button:{
    backgroundColor:'lightgray',
    borderRadius:10,
    paddingHorizontal:35,
    paddingVertical:7
  },
  buttonIcon:{
    backgroundColor:'lightgray',
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:7
  },
  onecikarlilanlarDiv:{
    height:100,
  },
  scrollPostVideo:{
    
  },
  scrolTabbar:{
    height:50,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  scrolTabbarIconActive:{
    color:'black',
    borderBottomColor:'gray',
    borderBottomWidth:1,
    paddingVertical:10,
    paddingHorizontal:40
  },
  scrolTabbarIcon:{
    paddingHorizontal:40
  },
  ScrollPage:{
    // backgroundColor:'lightblue',
    flex:1,
    width:width
  }
})