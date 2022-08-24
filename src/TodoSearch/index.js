import React from "react";
import useTodos from "../hooks/useTodos";
import './TodoSearch.css'

const TodoSearch = () => {

    const {searchValue, setSearchValue} = useTodos();    

    const onSearchValueChange = (e)=>{
        setSearchValue(e.target.value);
    }

    return (
        <input className="TodoSearch" placeholder="Busca una Tarea" onChange={onSearchValueChange} value={searchValue}/>
    );
}

export {TodoSearch};