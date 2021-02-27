import React from "react";
import {Button} from "react-native";

export const BtnDelete = ({id, removeItem}) => {
    return  (
        <Button
            onPress={() => removeItem(id)}
            title="X"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    );
};

