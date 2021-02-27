import React from "react";
import {Button} from "react-native";

export const BtnStatus = ({toggleStatus}) => {
    return  (
        <Button
            onPress={() => toggleStatus((status) => !status)}
            title="..."
            color="#814"
            accessibilityLabel="Learn more about this purple button"
        />
    );
};

