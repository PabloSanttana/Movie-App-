import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();



import Home from './screens/Home'
import Profile from './screens/Profile'
import Recents from './screens/Recents'

export default function Routes(){
    return(
        <NavigationContainer>
           <Tab.Navigator
            initialRouteName='Home'
            activeColor='#02ad94'
            inactiveColor='#dedede'
            style={{backgroundColor:'#000'}}
            barStyle={{backgroundColor: '#0f0f0f', padding:4}}
           >
                <Tab.Screen 
                    name="Home" 
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color}) =>(
                            <Icon name="home" color={color} size={28}/>
                        )
                    }}
                    component={Home} />
               
                <Tab.Screen 
                        name="Recents" 
                        options={{
                            tabBarLabel:'',
                            tabBarIcon:({color}) =>(
                                <Icon name="camera-metering-spot" color={color} size={28}/>
                            )
                        }}
                        component={Recents}
                        
                        />
                         <Tab.Screen 
                        name="Profile" 
                        options={{
                            tabBarLabel:'',
                            tabBarIcon:({color}) =>(
                                <Icon name="account" color={color} size={28}/>
                            )
                        }}
                        component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}