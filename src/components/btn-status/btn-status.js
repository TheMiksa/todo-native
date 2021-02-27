import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity} from "react-native";

export const BtnStatus = ({toggleStatus}) => {
    return  (
    <TouchableOpacity style={styles.container}
                      onPress={() => toggleStatus((status) => !status)}>
        <Text style={{color: "white"}}>!</Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#077",
        height: "100%",
        width: "50%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"}
});



