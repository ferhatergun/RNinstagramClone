import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import  IconIo from 'react-native-vector-icons/Ionicons'

export default function ProfileOneCikarilanlar() {
  return (
    <View style={styles.container}>
        <View style={styles.onecikar}>
            <Image source={require("../assets/ufuk.jpg")} style={styles.photo}/>
            <Text style={styles.text}>gezmece</Text>
        </View>
        <View style={styles.onecikar}>
            <Image source={require("../assets/acun.jpg")} style={styles.photo}/>
            <Text style={styles.text}>gezmece</Text>
        </View>
        <View style={styles.onecikar}>
            <Image source={require("../assets/ufukPost.jpg")} style={styles.photo}/>
            <Text style={styles.text}>gezmece</Text>
        </View>
        <View style={styles.onecikar}>
            <Image source={require("../assets/enes.jpg")} style={styles.photo}/>
            <Text style={styles.text}>gezmece</Text>
        </View>
        <View style={styles.onecikar}>
            <Image source={require("../assets/ufukPost.jpg")} style={styles.photo}/>
            <Text style={styles.text}>gezmece</Text>
        </View>
        <View style={styles.onecikar}>
            <Image source={require("../assets/demet.jpg")} style={styles.photo}/>
            <Text style={styles.text}>gezmece</Text>
        </View>
        <View style={styles.Icon}>
            <IconIo name='add' size={30}  /* style={styles.Icon} *//>
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'

    },
    onecikar:{
        borderWidth:1,
        borderColor:'lightgray',
        padding:2,
        borderRadius:50,
        width:65,
        height:65,
        marginRight:10,
        alignItems:'center',
    },
    photo:{
        width:'100%',
        height:'100%',
        borderRadius:50,
    },
    text:{
        fontSize:12,
        marginTop:2 
    },
    Icon:{
        borderWidth:1,
        borderColor:'lightgray',
        padding:2,
        borderRadius:50,
        width:65,
        height:65,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center'
    }
})