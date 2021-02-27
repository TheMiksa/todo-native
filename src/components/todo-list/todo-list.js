import React, {useState, useEffect} from "react";
import {View, ScrollView, AsyncStorage} from "react-native";
import {v4} from "uuid";
import TodoItem from "../todo-item";
import TodoInput from "../todo-input";

export const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem("todoList")
            .then((d) => {
                const data = JSON.parse(d) || [];
                if (data && (data.length !== todoList.length)) {
                 setTodoList(data);
                }
            });
    }, []);

    const setItem = async (text) => {
        if (!text) return;
        const newItem = {
            id: v4(),
            text
        };
        const newTodoList = JSON.parse(await AsyncStorage.getItem("todoList")) || [];

        newTodoList.push(newItem);
        newTodoList && AsyncStorage.setItem("todoList", JSON.stringify(newTodoList));
        setTodoList(newTodoList);
    };

    const removeItem = (id) => {
        const newTodoList = todoList.filter((el) => el.id !== id);
        AsyncStorage.setItem("todoList", JSON.stringify(newTodoList))
            .then(() => {
                setTodoList(newTodoList);
            });

    };

    return (
        <View style={{width: "80%"}}>
            <TodoInput setItem={setItem}/>
            <ScrollView style={{maxHeight: "88%", width: "100%"}}>
                {
                    todoList && todoList.map(({id, text}) => (
                        <TodoItem key={id} id={id} removeItem={removeItem}>{text}</TodoItem>
                    ))
                }
            </ScrollView>
        </View>
    );
};