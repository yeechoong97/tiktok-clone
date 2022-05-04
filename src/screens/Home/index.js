import React from 'react'
import { Text, View } from 'react-native'
import Post from '../../components/Post'

const post =
{
    id: 'p1',
    user: {
        id: 'p1',
        username: 'YuGi',
        profileUri: 'https://i.pinimg.com/564x/fb/75/1f/fb751f975bbfc961f6afa6bfa4c1fb71.jpg',
    },
    description: 'Tomboy Highlight #1',
    songName: 'Tomboy - (G)IDLE',
    songImage: 'https://pbs.twimg.com/media/FNp1Ov5agAE2OES.jpg',
    videoUri: 'https://res.cloudinary.com/fyp202105/video/upload/v1651654661/tomboy_fcryvh.mp4',
    likes: 123,
    comments: 12,
    shares: 44,
}


const Home = () => {
    return (
        <View>
            <Post post={post} />
        </View>
    )
}

export default Home