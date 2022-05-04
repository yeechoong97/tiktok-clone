import React from 'react'
import { Text, View } from 'react-native'
import Video from 'react-native-video'
import styles from './style'

const Post = () => {
    return (
        <View style={styles.container}>
            <Video
                source={{ uri: "https://res.cloudinary.com/fyp202105/video/upload/v1651641928/pexels-taro-5595352_qa4pja.mp4" }}
                style={styles.video}
                resizeMode={'cover'}
            />
        </View>
    )
}

export default Post