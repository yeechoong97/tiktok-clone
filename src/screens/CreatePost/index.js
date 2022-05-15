import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'

const CreatePost = () => {

    const navigation = useNavigation();
    const [description, setDescription] = useState("");

    const onPublish = () => {
        // upload video to cloud

        // create post in the database
    }

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