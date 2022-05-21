import { useNavigation } from '@react-navigation/native'
import { Storage, API, graphqlOperation, Auth } from 'aws-amplify'
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style';
import { useRoute } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createPost } from '../../graphql/mutations';

const CreatePost = () => {

    const navigation = useNavigation();
    const [description, setDescription] = useState("");
    const route = useRoute();
    const [videoKey, setVideoKey] = useState(null);

    const uploadToStorage = async (imagePath) => {
        try {
            const response = await fetch(imagePath);
            const blob = await response.blob();
            const fileName = `${uuidv4()}.mp4`;
            const s3Response = await Storage.put(fileName, blob)
            setVideoKey(s3Response.key);
        } catch (e) {
            console.error(e);
        }
    }

    const onPublish = async () => {
        // upload video to cloud

        // create post in the database
        if (!videoKey) {
            console.warn("Video is not yet uploaded");
            return;
        }

        try {
            const userInfo = await Auth.currentAuthenticatedUser();

            const newPost = {
                videoUri: videoKey,
                description: description,
                songID: '30e87133-dfe1-4c95-99a6-5c5fb842636a',
                userID: userInfo.attributes.sub,
            }

            const response = await API.graphql(graphqlOperation(createPost, { input: newPost }));

            navigation.navigate("Home");
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        uploadToStorage(route.params.videoUri);
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                value={description}
                onChangeText={setDescription}
                style={styles.text}
                numberOfLines={5}
                multiline={true}
                placeholder="Description"
            />
            <TouchableOpacity style={styles.button} onPress={onPublish}>
                <Text style={styles.buttonText}>Publish</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreatePost