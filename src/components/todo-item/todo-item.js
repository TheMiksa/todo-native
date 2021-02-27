import React from "react";
import {View, Text} from "react-native";
import BtnDelete from "../btn-delete";
import BtnEdit from "../btn-edit";

export const TodoItem = () => {
    return (
        <View style={{alignItems: "center", flexDirection: "row"}}>
            <Text>
                Todo Item
            </Text>
            <BtnEdit/>
            <BtnDelete/>
        </View>
    );
};