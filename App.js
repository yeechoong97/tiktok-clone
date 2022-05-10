import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createUser } from './src/graphql/mutations';
import { getUser } from './src/graphql/queries';

const randomImages = [
    "https://res.cloudinary.com/fyp202105/image/upload/v1614037856/Avatar/Avatar-11.png",
    "https://res.cloudinary.com/fyp202105/image/upload/v1614037856/Avatar/Avatar-12.png",
    "https://res.cloudinary.com/fyp202105/image/upload/v1614037856/Avatar/Avatar-13.png",
    "https://res.cloudinary.com/fyp202105/image/upload/v1614037856/Avatar/Avatar-14.png",
    "https://res.cloudinary.com/fyp202105/image/upload/v1614037856/Avatar/Avatar-15.png"
]

const App = () => {

    useEffect(() => {
        const fetchUser = async () => {
            //get currently authenticated user
            const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

            if (!userInfo) {
                return;
            }

            //Check if the user exists in db
            const currentUser = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));

            if (currentUser.data.getUser) {
                console.log("User already exists in database");
                return;
            }

            // If no, then create a new user
            const newUser = {
                id: userInfo.attributes.sub,
                username: userInfo.username,
                email: userInfo.attributes.email,
                imageUri: getRandomImage(),
            };

            await API.graphql(graphqlOperation(createUser, { input: newUser }));
        };

        fetchUser();
    }, []);

    const getRandomImage = () => {
        return randomImages[Math.floor(Math.random() * randomImages.length)]
    }

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
