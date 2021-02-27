import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoList from "./src/components/todo-list";
import Header from "./src/components/header";
import TodoInput from "./src/components/todo-input";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor="olive"/>
            <Header/>
            <View>
                <TodoList/>
                <TodoInput/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f2f3f',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});
