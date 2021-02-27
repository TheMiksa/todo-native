import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import BtnDelete from "../btn-delete";
import BtnStatus from "../btn-status";

export const TodoItem = ({id, removeItem, children}) => {
    const [status, toggleStatus] = useState(false);
    return (
        <View style={styles.todoItem}>
            <View style={{
                width: "70%",
                height: 40,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: status ? "gold" :"#338",
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5}}>
                <Text>{children}</Text>
            </View>
            <View style={styles.btnBox}>
                <BtnStatus toggleStatus={toggleStatus}/>
                <BtnDelete id={id} removeItem={removeItem}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        alignItems: "center",
        flexDirection: "row",
        height: 40, width: "100%"},
    btnBox: {
        width: "30%",
        flexDirection: "row"
    }
});