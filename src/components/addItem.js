import React from 'react'

export default function addItem(props) {

    let spaceAround = {
        display: "flex",
        flexDirection: "Row",
        justifyContent: "space-around"        
    }
    let submit = (e) => {
        e.preventDefault()
        var newTitle = document.getElementById('title').value;
        var desc = document.getElementById('desc').value;
        props.add(newTitle, desc);

        document.getElementById('title').value = "";
        document.getElementById('desc').value = "";
    }
    return (
        <div className="container my-2 border-danger border p-4 border-top-0">

            <div style={spaceAround}>
                <h1>Add a new todo</h1>          
            </div>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-success">Add Item</button>
            </form>
            
        </div>
    )
}
