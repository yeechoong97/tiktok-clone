import React, { useState } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import Video from 'react-native-video'
import styles from './style'

const Post = () => {

    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    source={{ uri: "https://res.cloudinary.com/fyp202105/video/upload/v1651641928/pexels-taro-5595352_qa4pja.mp4" }}
                    style={styles.video}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post