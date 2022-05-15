import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonRecord: {
        height: 50,
        width: 50,
        backgroundColor: '#ff4343',
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 25,
    },
    buttonStop: {
        height: 35,
        width: 35,
        backgroundColor: '#ff4343',
        marginVertical: 20,
        alignSelf: 'center',
        borderRadius: 3,
    }

});

export default styles;