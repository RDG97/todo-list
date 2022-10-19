import { useState, useEffect } from "react";
import React from "react";

export default function Todo() {

    const [Todo, setTodo] = useState([]);

    function addTodo(e) {
        const Todof = document.getElementById('Todof')
        setTodo(e.target.value);
        console.log(Todo)
    }
    
    
    function SendLocal() {
        let x = localStorage.length + 1;
        localStorage.setItem(`todo${x}`, [JSON.stringify(Todo)] );
        
    }
    function clear() {
        localStorage.clear()
    }

    return (
        <>
            <center>
            <input  type="text" id="Todof"  onChange={addTodo}/>
            <input type="submit" id="TodoSub" value="add to do" onClick={SendLocal}></input>
            <input type="submit" id="clear" value="clear local" onClick={clear}></input>
            <br></br>
            <p>you will add <b>{Todo}</b></p>
            </center>
        </>
    )
}