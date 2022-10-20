import { useState, useeffect } from "react";
let list 
export default function TodoBoard(props) {

    
   
    
    function test(index) {
        props[index][2] = 'Todo'
        console.log('test func', props)
        return props
    }

    let todos = props.filter(lis =>
        lis[2] === 'Todo'
    );
    return (

    <div className="container bg-primary" id="listBody">
            <div className="row" id="listBody">
                <div className="col bg-danger border border-2 border-dark">to do
                <div className="row bg-warning border border-2">
                    {todos.map((product, index) => (
                        <>
                <h1>{product[0]}</h1>
                {console.log('prod', index)}
                <input type='submit' onClick={ ()=> test(index)} ></input>
               
                </>
              ))} 
                </div>
                </div>
                </div>
                </div>
    )};