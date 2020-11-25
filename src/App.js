import React from 'react';
import './App.css';
import TodoItem from './TodoItem'
import {todoData} from './vsschoolProduct'


 



class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos:todoData
    }
    this.HandleChange= this.HandleChange.bind(this)
  }
  HandleChange(id){
   this.setState((Prevstate)=>{
     const updatedTodos = Prevstate.todos.map(todo=>{
       if(todo.id===id){
         todo.completed=!todo.completed
       }
       return todo
     })

     return {
       todos: updatedTodos
     }


   })

  }
  
  
  render(){
    const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} HandleChange={this.HandleChange} />)
    
  return (
    <div className="content">
      
    {todoItem}

     
    </div>
  );
}
}

export default App;