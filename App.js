import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';

import Home from './src/screens/Home';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';

const App = () => {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={{ flex: 1 }}>
                <RootNavigation />
            </SafeAreaView>
        </>
    );
};



export default App;
