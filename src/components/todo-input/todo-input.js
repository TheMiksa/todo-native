import React, {useState} from "react";
import {TextInput, View, Button} from "react-native";

export const TodoInput = ({setItem}) => {
    const [val, setVal] = useState("");
    const addItem = () => {
        setItem(val);
        setVal("");
    };
    return (
        <View style={{flexDirection: "row"}}>
            <TextInput onChangeText={(text) => setVal(text)}
                       value={val}
                       style={{backgroundColor: "olive", borderRadius: 5, width: 85}}
            />
            <Button
                onPress={addItem}
                title="..."
                color="#814"
                accessibilityLabel="Learn more about this purple button"/>
        </View>

    );
};