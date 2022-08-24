import React from "react";
import './CreateTodoButton.css';


const CreateTodoButton = (props) => {

    const {setOpenModal} = props

    const click = ()=>{
      setOpenModal(prevState => !prevState)
    };

    return (
        <button className="CreateTodoButton" onClick={click}>+</button>
    );
}

export {CreateTodoButton};