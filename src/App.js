import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { MilkyWay } from './components/milky-way';
import Todos from './components/todos';

function App() {
  //initialize list from last session
  let initList;
  if (localStorage.getItem('todoList')==="null"){
    initList="";
  }else{
    initList = JSON.parse(localStorage.getItem('todoList'));
  }
  //useState is like live data, everytime you setTodo, it update the whole javascript
  var [todoList, setTodo] = useState(initList);

  //delete, and setTodo list and set to localStorage
  const del = (t) => {
    setTodo(todoList.filter( (items) => {
      return items!==t;
    }))
  }
  //add and setTodo list 
  const add = (title, desc) => {
    if (title==="" ){
      window.alert("Please provide a title for your todo")
    }else if (desc===""){
      window.alert("Please provide a description for your todo")
    }else{
      var item = {
        sno: todoList.length+1,
        title: title,
        desc: desc
      }
      
      setTodo([...todoList, item])
      }
  }
  //the setTodo doesnt immediately change value of list, so we set wrong data to localStorage
  //so useEffect will store the data whenever the list is updated in real-time
  useEffect( () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])

  //the var display sets display of addMenu bar, onClick, addMenu is called
  var [display, setDisplay] = useState("false");

  const addMenu = () => {
      setDisplay(display => !display)
  }

  //sorting functions
  const dateSort = () => {
    setTodo(todoList.sort( (a, b) => a.sno - b.sno ));
    console.log(todoList)
  }
  //the todo list is being updated, but the changes are not rendered on app
  const lexSort = () => {
    setTodo(todoList.sort( (a,b) => {
      if (a.title < b.title){
        return 1;
      }else if (a.title > b.title){
        return -1;
      }else{
        return 0
      }
    }))
    console.log(todoList)
  }
 

  return (
    <> 
      <Router>  
        <Header title="To-dos List" searchBar={true} add={add} display={display} addMenu={addMenu} dateSort = {dateSort} lexSort={lexSort}/>

        <Switch>
          <Route exact path="/">
            
            <Todos todoList = {todoList} del = {del}/>  

          </Route>

          <Route exact path="/milky-way">
            <MilkyWay />
          </Route>
          
        </Switch>

        <Footer/>
      </Router> 
    </>
  );
}

export default App;
