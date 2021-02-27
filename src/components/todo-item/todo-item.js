import React, {useState} from "react";
import {View, Text} from "react-native";
import BtnDelete from "../btn-delete";
import BtnStatus from "../btn-status";

export const TodoItem = ({id, removeItem, children}) => {
    const [status, toggleStatus] = useState(true);
    return (
        <View style={{alignItems: "center", flexDirection: "row"}}>
            <Text style={{textDecorationLine: status ? "none" :"line-through"}}>
                {children}
            </Text>
            <BtnStatus toggleStatus={toggleStatus}/>
            <BtnDelete id={id} removeItem={removeItem}/>
        </View>
    );
};