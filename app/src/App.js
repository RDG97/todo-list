import { useState, useEffect } from "react";

import Board from "./Board"
import Todo from "./EnterTodo"
import ComingBoard from "./Coming";
import TodoBoard from "./Todo";


export default function App(props) {

    
    const [page, setPage] = useState('Coming');
    const [data, setData] = useState([]);
    let list = []
    let x = 0;
    
    
    for (let i = 0; i < localStorage.length; i++) {
        x++
        list.push([localStorage.getItem(`todo${x}`) , x , 'comingup'])
        console.log('list', list)
    }
      
    //trying to setData whenever a new item is added
      useEffect(() => {
        setData(list)
      }, [props]);
      
      //useEffect(() => {
      //  setData(list)
      //  console.log('fart')
      //}, [localStorage]);


    console.log('data',data)
    return (
        <>
        
        <Todo />
        {page == 'Coming' && <ComingBoard data={data} setData={setData}/>}
        {page == 'todo' && <Todo data={data}/>}
        </>
    )
}