import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';

import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <>
            <NavigationContainer>
                <StatusBar barStyle='dark-content' />
                <SafeAreaView>
                    <Home />
                </SafeAreaView>
            </NavigationContainer>
        </>
    );
};



export default App;
