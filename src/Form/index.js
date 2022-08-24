import React, {useState} from 'react';
import './Form.css';
import useTodos from "../hooks/useTodos";

export default function Form() {

    const {setOpenModal, addTodo} = useTodos()

    const [newText, setNewText] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const onChange = (e)=>{
        setNewText(e.target.value)
    }

    const onAdd = (e)=>{
       e.preventDefault();
       const tarea = {
         text: newText,
         completed: false,
       }

       const err = addTodo(tarea); 

       if (err.status) {
        setOpenModal(false);
       }else{
        setError(true);
        setMessage(err.message)
       }
      
    }

    const onCancel =()=>{
       setOpenModal(false);
    }

  return (
    <form onSubmit={onAdd}>
        <label>Ingresa una Nueva Tarea</label>
        <textarea rows={3} placeholder="Nueva Tarea" value={newText} onChange={onChange}></textarea>
        <div className='TodoForm-buttonContainer'>
            <button className='TodoForm-button TodoForm-button-add'>Guardar</button>
            <button type='button' className='TodoForm-button TodoForm-button-cancel' onClick={onCancel}>Cancelar</button>
        </div>
        {
            error && <p className='error'>{message}</p>
        }
    </form>
  )
}
