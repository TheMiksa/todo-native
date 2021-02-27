import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import BtnDelete from "../btn-delete";
import BtnStatus from "../btn-status";

export const TodoItem = ({id, removeItem, children}) => {
    const [status, toggleStatus] = useState(false);
    const [maxLength, setMaxLength] = useState(false);
    const [shortForm, toggleShortForm] = useState(false);

    useEffect(() => {
            if (children.length >= 35) {
                setMaxLength(true);
                toggleShortForm(true);

            }
    }, []);

    return (
        <View style={styles.todoItem}>
            {maxLength ? (
                <TouchableOpacity style={{...styles.textBox,
                    backgroundColor: status ? "gold" :"#338"}}
                                  onPress={() => {
                                      if (children.length >= 35) {
                                          toggleShortForm((val) => !val);
                                      }
                                  }}>
                    <Text>{shortForm ? (children.slice(0, 34) + "...") : children}</Text>
                </TouchableOpacity>
            ) : (
                <View style={{...styles.textBox,
                    backgroundColor: status ? "gold" :"#338"}}>
                    <Text>{children}</Text>
                </View>
            )}
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
        minHeight: 40, width: "100%",
        marginBottom: 8},
    textBox: {
        width: "70%",
        minHeight: 40,
        flexDirection: "row",
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 5},
    btnBox: {
        width: "30%",
        flexDirection: "row",
        height: "100%"
    }
});