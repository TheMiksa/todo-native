import React from "react";
import {Text, View} from "react-native";

export const Header = () => {
    return (
        <View>
            <Text style={{fontSize: 40, color: "olive", marginTop: 10}}>ToDo</Text>
            <Text style={{color: "gray"}}>for SashaClone</Text>
        </View>
    );
};