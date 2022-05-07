import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    video: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 75
    },
    uiContainer: {
        height: '100%',
        paddingBottom: 0,
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    songName: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 5
    },
    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#4c4c4c',
    },
    // Right Container
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: "space-between"
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
        marginRight: 10,
    },
    statsLabel: {
        color: '#fff',
        marginTop: 5,
    },
    iconContainer: {
        alignItems: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    redHeart: {
        color: 'red',
    }

});

export default styles;