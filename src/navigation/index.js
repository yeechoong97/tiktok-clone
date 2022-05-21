import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeBottomTabNavigator from './homeBottomTabNavigator';
import CreatePost from '../screens/CreatePost';

const RootNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeBottomTabNavigator" component={HomeBottomTabNavigator} />
                <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown: true, title: "Post" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation