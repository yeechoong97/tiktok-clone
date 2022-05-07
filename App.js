import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';

import Home from './src/screens/Home';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <SafeAreaProvider>
                <RootNavigation />
            </SafeAreaProvider>
        </>
    );
};



export default App;
