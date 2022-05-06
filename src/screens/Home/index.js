import React, { useCallback, useState } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import Post from '../../components/Post'
import posts from '../../../data/post';

const Home = () => {

    const [currentVideoID, setCurrentVideoID] = useState(null);

    const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        if (viewableItems.length !== 0) {
            setCurrentVideoID(viewableItems[0].item.id);
        }
    }, [])

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} currentID={currentVideoID} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={'end'}
                decelerationRate={'fast'}
                onViewableItemsChanged={_onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            />
        </View>
    )
}

export default Home