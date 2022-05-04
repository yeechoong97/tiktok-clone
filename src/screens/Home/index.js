import React from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'
import Post from '../../components/Post'
import posts from '../../../data/post';

const Home = () => {

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={'end'}
                decelerationRate={'fast'}
            />
        </View>
    )
}

export default Home