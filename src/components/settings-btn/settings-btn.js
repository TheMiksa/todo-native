import React from "react";
import {View, Image} from "react-native";
import {Link} from "react-router-native";
export const SettingsBtn = () => {
    return (
        <Link style={{position: "absolute", right: 0, top: 30, borderRadius: 20}} to={"/settings"}><View>
            <Image style={{width: 30, height: 30}} source={require("../../images/settings.png")}/>
        </View>
        </Link>
    );
};