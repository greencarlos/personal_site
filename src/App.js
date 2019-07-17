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
  this.addTodo = (todo) => {
      console.log(this.state)
  todo.id = Math.random()
  let todos = [...this.state.todos, todo];
  this.setState({
      todos
      })
    }
  }

  render() {
    return(<div className="todo-app container">
  <h1 className="center">Todo List</h1>
  <p>(Click on a TODO to delete it)</p>	    
  <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} createTodo={this.createTodo}/>  
  <AddTodo addTodo={this.addTodo} />	    
  </div>)
  }
}

module.exports = App;
