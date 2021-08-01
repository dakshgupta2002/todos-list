import React from 'react';

export default function todoItem(props) {
    const decorate = {
        textDecoration: 'underline',
        color: '#1b5e20',
        textTransform:'uppercase'
      }

    let listItems = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",  
        alignItems: "center"      
    }
   
    return (
        <div className="container">
            <div style={listItems}>   
                <div>
                    <h3 style={decorate}>{props.item.title}</h3>
                    <h6>{props.item.desc}</h6>
                </div>

                <div>
                    <button id="delete" className="btn btn-danger btn-sm" onClick={ () => props.del(props.item)}>Delete</button>
                </div>
                </div> 
            <hr/>
        </div>
    )
}

