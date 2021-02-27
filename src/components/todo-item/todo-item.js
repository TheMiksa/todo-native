import React from "react";
import {View, Text} from "react-native";
import BtnDelete from "../btn-delete";
import BtnEdit from "../btn-edit";

export const TodoItem = ({id, removeItem, children}) => {
    return (
        <View style={{alignItems: "center", flexDirection: "row"}}>
            <Text>
                {children}
            </Text>
            <BtnEdit/>
            <BtnDelete id={id} removeItem={removeItem}/>
        </View>
    );
};