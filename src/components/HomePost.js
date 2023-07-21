import { View, Text ,StyleSheet ,FlatList,Image} from 'react-native'
import React from 'react'
import  IconEn  from 'react-native-vector-icons/Entypo'
import  IconIo  from 'react-native-vector-icons/Ionicons'


export default function HomePost({item}) {
  return (
    <View style={styles.container}>
        <View style={styles.post1Div}>
            <View style={styles.postHeader}>
                <View style={styles.postHeaderImegeName}>
                    <Image source={item.profilePhoto} style={styles.postheaderImage} />
                    <Text style={styles.postHeadetText}>{item.username}</Text>
                </View>
                <IconEn name='dots-three-vertical' size={18}/>
            </View>
            <View style={styles.postContent}>
            <Image source={item.postImage} style={styles.postContentImage} />
            </View>
            <View style={styles.postFooter}>
                <View style={styles.buttonDiv}>
                    <View style={styles.buttonLeft}>
                        <IconIo name='heart-outline' size={30} />
                        <IconIo name='ios-chatbubble-outline' size={28} style={{transform:[{rotate:'-90deg'}],marginRight:4}} />
                        <IconIo name='send-outline' size={28} style={{transform:[{rotate:'-30deg'}],marginTop:-3}} />
                    </View>
                    <View style={styles.buttonRight}>
                        <IconIo name='bookmark-outline' size={28} />
                    </View>
                </View>
                <View style={{}}>
                    <Text style={styles.likeText}>375 beğenme</Text>
                    <Text><Text style={styles.likeText} >{item.username} </Text>{item.postInformation}</Text>
                    <Text style={styles.commentSee}>68 yorumun tümünü gör</Text>
                    <Text style={styles.date}>3 gün önce</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'lightblue'
    },
    post1Div:{
        height:550,

    },
    postHeader:{
        flex:1,
        // backgroundColor:"blue",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    postContent:{
        flex:7,
        backgroundColor:'red'
    },
    postFooter:{
        flex:2.4,
        paddingHorizontal:10,
    },
    postheaderImage:{
        width:40,
        height:40,
        borderRadius:50,
        marginRight:10
    },
    postHeaderImegeName:{
        flexDirection:'row',
        alignItems:'center'
    },
    postHeadetText:{
        fontWeight:500,
        fontSize:13
    },
    postContentImage:{
        width:'100%',
        height:'100%'
    },
    buttonDiv:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5,
        marginBottom:5
    },
    buttonLeft:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'blue'
    },
    buttonRight:{
        flex:2,
        // backgroundColor:'red',
        alignItems:'flex-end',
        paddingRight:5
    },
    likeText:{
        fontSize:13,
        fontWeight:500,
    },
    commentSee:{
        fontSize:13,
        color:'#828282'
    },
    date:{
        fontSize:12,
        color:'#828282'
    }

})