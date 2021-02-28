import React from "react";
import {View, TouchableOpacity, Image} from "react-native";

export const SettingsBtn = () => {
    return (
        <TouchableOpacity style={{position: "absolute", right: -45, top: 20}}>
            <View>
                <Image style={{width: 30, height: 30}} source={require("../../images/settings.png")}/>
            </View>
        </TouchableOpacity>
    );
};