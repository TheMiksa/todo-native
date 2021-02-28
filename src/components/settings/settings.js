import React from "react";
import {View, Text} from "react-native";
import {Link} from "react-router-native";

export const Settings = () => {
    return (
        <View style={{position: "relative", width: "100%", alignItems: "center"}}>
            <Text style={{fontSize: 30, marginTop: 10, color: "olive"}}>
                Settings
            </Text>
            <View style={{position: "absolute", top: 20, left: 0}}>
                <Link to={"/"}><Text style={{color: "olive", fontSize: 20}}>Back</Text></Link>
            </View>
        </View>
    );
};