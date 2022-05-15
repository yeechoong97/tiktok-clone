import React, { useState, useRef } from 'react'
import { RNCamera } from 'react-native-camera'
import { View, TouchableOpacity } from 'react-native'
import styles from './style'


const CameraUpload = () => {

    const [isRecording, setIsRecording] = useState(false);
    const camera = useRef();

    const onRecord = async () => {
        if (isRecording) {

            camera.current.stopRecording();
        }
        else {
            const data = await camera.current.recordAsync();
            console.log(data);
        }
    }


    return (
        <View style={styles.container}>
            <RNCamera
                type={RNCamera.Constants.Type.back}
                onRecordingStart={() => setIsRecording(true)}
                onRecordingEnd={() => setIsRecording(false)}
                onCameraReady={() => console.log("CAMERA IS READY")}
                ref={camera}
                style={styles.preview}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            />
            {/* <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} /> */}
            <TouchableOpacity
                style={isRecording ? styles.buttonStop : styles.buttonRecord}
                onPress={onRecord}
            />
        </View>
    )
}

export default CameraUpload