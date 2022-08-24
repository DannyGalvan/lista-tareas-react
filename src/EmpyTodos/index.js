import React from 'react';
import './EmpyTodos.css';

function EmptyTodos() {
  return <p className='empty'>¡Crea tu primer Tarea!</p>;
}

function Empty() {
  return <p className='empty'>¡No hay Resultados con tu Busqueda!</p>;
}

export { EmptyTodos, Empty };