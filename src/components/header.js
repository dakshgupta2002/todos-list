import React from 'react'
import PropTypes from 'prop-types';
import AddItem from './addItem';
import {Link} from 'react-router-dom';

export default function header(props) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <button className="btn btn-secondary" onClick={props.addMenu}>Add Todo</button>
                        </li>
                        <li className="nav-item dropdown">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filters
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button className="btn btn-secondary dropdown-item" onClick={props.dateSort}>Date added</button>
                                <button className="btn btn-secondary dropdown-item" onClick={props.lexSort}>Lexicographically</button>
                            </div>
                            </div>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/milky-way">Milky Way</Link>
                        </li>
                    </ul>

                    {props.searchBar? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                    </div>
                </div>
            </nav>
             
            {props.display? <AddItem add = {props.add} /> : ""}

        </div>

        
    )
}

header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
  };