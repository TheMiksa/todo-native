import React from "react";
import {View, Text} from "react-native";
import TodoItem from "../todo-item";

export const TodoList = () => {
    return (
        <View>
            <Text>Todo List</Text>
            <TodoItem>TodoItem</TodoItem>
            <TodoItem>TodoItem</TodoItem>
            <TodoItem>TodoItem</TodoItem>
            <TodoItem>TodoItem</TodoItem>
        </View>
    );
};