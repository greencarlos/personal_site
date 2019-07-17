"use strict"
const React = require('react')
const Todos = require('./Todos.js')
const AddTodo = require('./AddTodo.js') 

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
    todos: [
    {id: 1, content: 'buy some milk'},
    {id: 2, content: 'play mario kart'},
      ]
    },
  this.deleteTodo = (id) => {
    console.log(id)
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
  });
  this.setState({
    todos
      });
    }
  }

  render() {
    return(<div className="todo-app container">
  <h1 className="center">Todo List</h1>
  <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} createTodo={this.createTodo}/>  
  <AddTodo />	    
  </div>)
  }
}

module.exports = App;
