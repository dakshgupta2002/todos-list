import React from 'react'
import TodoItem from './todoItem'

export default function todos(props) {

    let spaceAround = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",       
    }
    let height = {
        minHeight: "70vh"
    }

    return (
        <div style={height}>
            <div style={spaceAround}>
                <h1>Todos List</h1>          
            </div>

            {props.todoList.length>0?
            props.todoList.map( (item)  =>  {
                return <TodoItem item = {item} key={item.sno} del={props.del}/>}
            ):"No tasks to do!" }
            
        </div>
    )
}
