import { useContext } from "react";
import { createContext } from "react";

export let todoContext = createContext({
    todos: [
        // {
        //     id: 1,
        //     todo: "todo1",
        //     completed: false
        // },
    ],
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export let useTodo = () => {
    return useContext(todoContext);
}

export let TodoProvider = todoContext.Provider;