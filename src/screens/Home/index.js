import React, { useCallback, useEffect, useState } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import Post from '../../components/Post'
// import posts from '../../../data/post';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const Home = () => {

    const [currentVideoID, setCurrentVideoID] = useState(null);
    const [posts, setPosts] = useState([]);

    const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        if (viewableItems.length !== 0) {
            setCurrentVideoID(viewableItems[0].item.id);
        }
    }, [])

    useEffect(() => {

        const fetchPost = async () => {
            // Fetch all the posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                setPosts(response.data.listPosts.items);
                console.log(response.data.listPosts.items);
            }
            catch (error) {

            }
        }

        fetchPost();

    }, [])

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} currentID={currentVideoID} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 75}
                snapToAlignment={'end'}
                decelerationRate={'fast'}
                onViewableItemsChanged={_onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            />
        </View>
    )
}

export default Home