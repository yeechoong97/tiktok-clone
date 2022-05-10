import React from 'react';
import {
    StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from 'aws-amplify-react-native';

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

export default withAuthenticator(App);
