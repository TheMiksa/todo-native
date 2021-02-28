import React from "react";
import {View, Image, Text} from "react-native";
import TodoList from "../todo-list";
import Header from "../header";
import SettingsBtn from "../settings-btn";

export const Home = () => {
    return (
        <View style={{position: "relative"}}>
            <Header/>
            <SettingsBtn/>
            <Text>Some Text</Text>
            <TodoList/>
        </View>
    );
};