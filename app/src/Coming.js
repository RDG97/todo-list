import { useState, useEffect } from "react";



let list = []
export default function ComingBoard(props) {
    
    
    function test(index) {
        //console.log('before test', props.data[index][2])
        let newar = props.data.filter(lis =>
            lis[2] === 'comingup'
            );
        //let newar = [...props.data]
        newar[index][2] = 'Todo'
        props.setData(newar)
        //props.setData(props.data[index][2] = 'Todo');
        
        //console.log('test func', newar)
        //console.log('the data array looks like', props)
    }
    

    //function handleClick() {
    //    const nextList = [...list];
    //    nextList.reverse();
    //    setList(nextList);
    //  }
    


        console.log('before filter', props)

        
                let commers = props.data.filter(lis =>
                    lis[2] === 'comingup'
                    );
                    console.log('before filter', props)
                    console.log('commers', commers)
        
        

    
    return (

    <div className="container bg-primary" id="listBody">
            <div className="row" id="listBody">
                <div className="col bg-danger border border-2 border-dark">Coming Up
                <div className="row bg-warning border border-2">
                {commers.map((props, index) => (
                <>
                <h1>{props[0]}</h1>
                {console.log('commers mapped index', index)}
                <input type='submit' onClick={ ()=> test(index, props)} ></input>

                </>
                ))} 
                </div>
                </div>
                </div>
                </div>
    )};


