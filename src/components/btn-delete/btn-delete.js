import React, {Fragment} from "react";
import {Button, Text, TouchableOpacity, StyleSheet} from "react-native";

export const BtnDelete = ({id, removeItem}) => {
    return  (
            <TouchableOpacity style={styles.container}
                              onPress={() => removeItem(id)}>
                <Text style={{color: "white"}}>X</Text>
            </TouchableOpacity>

    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#911",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        height: "100%",
        width: "50%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"}
});

