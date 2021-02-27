import React, {useEffect, useState} from "react";
import {View, Text, SafeAreaView,ScrollView} from "react-native";
import {v4} from "uuid";
import TodoItem from "../todo-item";
import TodoInput from "../todo-input";

export const TodoList = () => {
    const [todoList, setTodoList] = useState([
        {id: "f1f31d", text: "item1"},
        {id: "f1f312", text: "item2"},
        {id: "f1f313", text: "item3"}]);

    const setItem = (text) => {
        const newItem = {
            id: v4(),
            text
        };

        setTodoList((todoList) => [...todoList, newItem]);
    };
    const removeItem = (id) => {
        const newTodoList = todoList.filter((el) => el.id !== id);
        setTodoList(newTodoList);
    }
    console.log("rendered");
    return (
        <View style={{width: "80%"}}>
            <TodoInput setItem={setItem}/>
            <ScrollView style={{maxHeight: "90%", width: "100%"}}>
                {
                    todoList && todoList.map(({id, text}) => (
                        <TodoItem key={id} id={id} removeItem={removeItem}>{text}</TodoItem>
                    ))
                }
            </ScrollView>
        </View>
    );
};