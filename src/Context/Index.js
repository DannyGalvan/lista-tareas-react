import React, {createContext, useState} from 'react'
import useLocalStorage from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {

const { 
    item: todos, 
    save: saveTodos, 
    loading,
    error
    } = useLocalStorage('todosV1',[]);

const [searchValue, setSearchValue] = useState('');
const [openModal, setOpenModal] = useState(false);

const completedTodos = todos.filter(t => !!t.completed).length;
const totalTodos = todos.length;

let searchedTodos = [];

if (!searchValue.length >= 1) {
  searchedTodos = todos;
}else{
  searchedTodos = todos.filter(todo => {
    const text = todo.text.toLowerCase();
    const search = searchValue.toLowerCase();
    return text.includes(search);
  })
}

const complete = (text) =>{
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(todo => todo.text == text);

    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false
    }else{
      newTodos[todoIndex].completed = true
    }

    saveTodos(newTodos);
}

const addTodo = (todo) =>{

  const newTodos = [...todos];

  if (!todo.text) {
    return {
      status: false,
      message: "Tarea No Puede Estar Vacia"
    };
  } 

  const filter = newTodos.filter(t => t.text == todo.text);

  if (filter.length == 0) {
    newTodos.push(todo);

    saveTodos(newTodos);
    return {
      status: true,
      message: ""
    };
  }else{
    return {
      status: false,
      message: "Ya Existe una Tarea con Ese Nombre"
    };
  }

  

}

const deleteTodo = (text) => {

  const newTodos = [...todos];

  const todoIndex = newTodos.findIndex(todo => todo.text == text);

  newTodos.splice(todoIndex,1);

  saveTodos(newTodos);
}
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            complete,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}



