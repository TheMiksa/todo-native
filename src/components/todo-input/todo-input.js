import React, {useState} from "react";
import {TextInput, View, Text, Button, TouchableOpacity} from "react-native";

export const TodoInput = ({setItem}) => {
    const [val, setVal] = useState("");
    const addItem = () => {
        setItem(val);
        setVal("");
    };
    return (
        <View style={{flexDirection: "row", height: 35, width: "100%", marginBottom: 20, marginTop: 5}}>
            <TextInput onChangeText={(text) => setVal(text)}
                       value={val}
                       style={{
                           backgroundColor: "#99a",
                           borderTopLeftRadius: 5,
                           borderBottomLeftRadius: 5,
                           width: "85%",
                           paddingLeft: 5,
                           color: "#266"}}
            />
            <TouchableOpacity
                onPress={addItem}
                style={{
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    width: "15%",
                    backgroundColor: "#880",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"}}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>

    );
};