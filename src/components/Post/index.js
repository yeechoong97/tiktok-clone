import React, { useState } from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import Video from 'react-native-video'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {

    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View>
                    <Video
                        source={{ uri: "https://res.cloudinary.com/fyp202105/video/upload/v1651641928/pexels-taro-5595352_qa4pja.mp4" }}
                        style={styles.video}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                    />
                    <View style={styles.uiContainer}>

                        <View style={styles.rightContainer}>
                            <Image style={styles.profilePicture} source={{ uri: 'https://res.cloudinary.com/fyp202105/image/upload/v1614037856/Avatar/Avatar-14.png' }} />
                            <View style={styles.iconContainer}>
                                <AntDesign name={'heart'} size={35} color="white" />
                                <Text style={styles.statsLabel}>Like</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesome name={'commenting'} size={35} color="white" />
                                <Text style={styles.statsLabel}>Like</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Fontisto name={'share-a'} size={35} color="white" />
                                <Text style={styles.statsLabel}>Like</Text>
                            </View>
                        </View>

                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>Bottom</Text>
                                <Text style={styles.description}>Description</Text>
                                <View style={styles.songRow}>
                                    <Entypo name={"beamed-note"} size={24} color="white" />
                                    <Text style={styles.songName}>Counting Starts</Text>
                                </View>
                            </View>
                            <Image style={styles.songImage} source={{ uri: "https://upload.wikimedia.org/wikipedia/en/2/21/%3F_XXXTENTACION_Cover.png" }} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post