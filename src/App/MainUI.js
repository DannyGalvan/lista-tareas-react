import React from 'react'
import useTodos from '../hooks/useTodos';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { EmptyTodos, Empty } from '../EmpyTodos';
import { TodosError } from '../TodoError';
import { TodosLoading } from '../TodosLoading';
import Modal from '../Modal';
import Form from '../Form';

export default function MainUI() {
  
   const {error, loading, searchedTodos, complete, deleteTodo, openModal, setOpenModal, totalTodos} = useTodos();

  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />      
    <TodoList>
    {error && <TodosError/>}
    {loading && new Array(6).fill().map((item, index)=>(<TodosLoading key={index} />))}
    {totalTodos == 0 ? <EmptyTodos/> : null}
    {searchedTodos.length == 0 & totalTodos != 0 ? <Empty/> : null}

    {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => complete(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
    ))}
    </TodoList>
    {
      openModal && (
        <Modal>
         <Form/>
        </Modal>
      )
    }
    <CreateTodoButton setOpenModal={setOpenModal}/>     
  </React.Fragment>
  )
}
