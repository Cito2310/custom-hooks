import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodo = () => {

    const [ todos , dispatchTodo ] = useReducer( todoReducer , [] , init );

    useEffect(() => {
        localStorage.setItem("todos" ,JSON.stringify(todos))
    }, [todos])
    

    const onNewTodo = newTodo => {
        const action = {
            type: "Add Todo",
            payload: newTodo,
        }
        dispatchTodo(action);
    }

    const onDeleteTodo = todo => {
        dispatchTodo({
            type: "Remove Todo",
            payload: todo,
        })
    }

    const onToggleTodo = todo => {
        dispatchTodo({
            type: "Toggle Todo",
            payload: todo,
        })
    }


    return { 
        todos,
        onDeleteTodo,
        onNewTodo,
        onToggleTodo,
        todosCounter: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}
