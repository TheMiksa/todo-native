import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Home from "./src/components/home";


export default function App() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <StatusBar style="auto" backgroundColor="olive"/>
                <Home/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2f2f3f",
        alignItems: "center",
        padding: 20,
    },
});
