import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    text: {
        width: "100%",
        height: 150,
        margin: 10,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#ff4747',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 40,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;