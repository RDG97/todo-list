import { useState, useEffect } from "react";
import Todo from "./EnterTodo";
let list = []

export default function Board() {

    const [items, setItems] = useState([]);
    let x = 0
    for (let i = 0; i < localStorage.length; i++) {
        x++
        list.push([localStorage.getItem(`todo${x}`) , x , 'comingup'])
        console.log('list', list)
    }
    let commers = list.filter(lis =>
        lis[2] === 'comingup'
        );

        let todos = list.filter(lis =>
            lis[2] === 'Todo'
        );
        console.log('test', commers)

    
    console.log('another test', todos)
    console.log('please', list[0][2])

        function test(index) {
            list[index][2] = 'Todo'
            console.log('test func', list)
            
             
            return list
            
        }
    return (
        <>
        <div className="container bg-primary" id="listBody">
            <div className="row" id="listBody">
                <div className="col bg-danger border border-2 border-dark">Coming Up
                <div className="row bg-warning border border-2">
                    {commers.map((product, index) => (
                        <>
                <h1>{product[0]}</h1>
                {console.log('prod', index)}
                <input type='submit' onClick={ ()=> test(index)} ></input>
               
                </>
              ))} 
                </div>
                </div>

                <div className="col bg-light border border-2 border-dark">To Do
                <div className="row bg-warning border border-2">
           
                        {todos.map(product => (
                        <>
                <h1>{product[0]}</h1>
                <input type='submit' onClick={test}></input>
               
                </>
              ))}
                </div>
                </div>
                <div className="col bg-warning border border-2 border-dark">Completed</div>
            </div>
        </div>
        </>
    )
}