import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/pages/Profile';
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import NewPost from './src/pages/NewPost';
import Reels from './src/pages/Reels';
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <View style={{flex:1,}}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'
        screenOptions={({route})=>({
          tabBarIcon:({color,focused,size})=>{
            let IconName;
            if(route.name=='Home')
              IconName=focused ? 'home':'home-outline'
            else if(route.name=='Search')
              IconName= focused ? 'search-sharp':'search-outline'
            else if(route.name=='NewPost')
              IconName = focused ? 'add-circle':'add-circle-outline'
            else if(route.name=='Reels')
              IconName = focused ? 'film':'film-outline'
            else if(route.name=='Profile')
              IconName = focused ? 'person':'person-outline'

              return<Icon name={IconName} size={size} color={color}></Icon>

          },
          headerShown:false

        })} >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="NewPost" component={NewPost} />
          <Tab.Screen name="Reels" component={Reels} />
          <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}