import React from "react";
import { createContext, useContext } from React

export const TodoContext = createContext({})

export const useTodo = () => {
    return (
        useContext(TodoContext)
    )
}

export const Todoprovider = TodoContext.Provider