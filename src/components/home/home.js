import React from "react";
import {View} from "react-native";
import TodoList from "../todo-list";
import Header from "../header";
import SettingsBtn from "../settings-btn";

export const Home = () => {
    return (
        <View style={{position: "relative", width: "100%", alignItems: "center"}}>
            <Header/>
            <SettingsBtn/>
            <TodoList/>
        </View>
    );
};