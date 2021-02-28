import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {NativeRouter as Router, Route} from "react-router-native";

import Home from "./src/components/home";
import Settings from "./src/components/settings";

export default function App() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <StatusBar style="auto" backgroundColor="olive"/>
                <Router>
                    <Route exact path={"/"} children={<Home/>}/>
                    <Route exact path={"/settings"} children={<Settings/>}/>
                </Router>
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
