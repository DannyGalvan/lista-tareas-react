import React from "react";
import useTodos from "../hooks/useTodos";
import './TodoCounter.css';

const TodoCounter = () => {

    const {completedTodos, totalTodos} = useTodos();
  
    return (
        <h2 className="TodoCounter">Has Completado {completedTodos} de {totalTodos} Tareas</h2>
    );
}

export {TodoCounter};