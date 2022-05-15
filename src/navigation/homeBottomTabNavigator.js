import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import plusIcon from '../assets/images/plus-icon.png';
import CameraUpload from '../screens/Camera';


const Tab = createMaterialBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#000' }}
            activeColor="#FFF"
            inactiveColor='grey'
            shifting={false}
        >
            <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (<Entypo name='home' color={color} size={26} />)
                }}
            />
            <Tab.Screen
                name={"Search"}
                component={Search}
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color }) => (<Entypo name='magnifying-glass' color={color} size={26} />)
                }}
            />
            <Tab.Screen
                name={"Upload"}
                component={CameraUpload}
                options={{
                    tabBarIcon: () => (<Image source={plusIcon} style={{ height: 35, resizeMode: 'contain' }} />),
                    tabBarLabel: null
                }}
            />
            <Tab.Screen
                name={"Inbox"}
                component={Inbox}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='message-minus-outline' color={color} size={26} />)
                }}
            />
            <Tab.Screen
                name={"Profile"}
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (<Ionicons name='person-sharp' color={color} size={26} />)
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeBottomTabNavigator