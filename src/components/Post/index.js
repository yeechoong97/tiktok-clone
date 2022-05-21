import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Video from 'react-native-video'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Storage } from 'aws-amplify';


const Post = ({ post, currentID }) => {

    const [paused, setPaused] = useState(true);
    const [videoPost, setVideoPost] = useState(post);
    const [isLiked, setIsLiked] = useState(false);
    const [videoUri, setVideoUri] = useState(null);

    const onPlayPausePress = () => {
        setPaused(!paused);
    }

    const updateLike = () => {
        const likesToAdd = isLiked ? -1 : +1;
        setVideoPost({
            ...post,
            likes: videoPost.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
    }

    const getVideoUri = async () => {
        if (post.videoUri.startsWith("http")) {
            setVideoUri(post.videoUri);
        }

        setVideoUri(await Storage.get(post.videoUri));
    }

    useEffect(() => {
        setPaused(videoPost.id !== currentID);
        getVideoUri();
    }, [currentID])


    return (
        <View style={[styles.container]}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View>
                    <Video
                        source={{ uri: `${videoUri}` }}
                        style={styles.video}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                        volume={0.3}
                    />
                    <View style={styles.uiContainer}>

                        <View style={styles.rightContainer}>
                            <Image style={styles.profilePicture} source={{ uri: `${post.user.imageUri}` }} />
                            <TouchableOpacity activeOpacity={0.5} onPress={updateLike}>
                                <View style={styles.iconContainer}>
                                    <AntDesign name={'heart'} size={35} color={`${isLiked ? "red" : "white"}`} />
                                    <Text style={styles.statsLabel}>{videoPost.likes}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.iconContainer}>
                                <FontAwesome name={'commenting'} size={35} color="white" />
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Fontisto name={'share-a'} size={35} color="white" />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>
                        </View>

                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.songRow}>
                                    <Entypo name={"beamed-note"} size={24} color="white" />
                                    <Text style={styles.songName}>{post.song.name}</Text>
                                </View>
                            </View>
                            <Image style={styles.songImage} source={{ uri: `${post.song.image}` }} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post