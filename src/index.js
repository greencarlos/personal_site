"use strict";
const React = require('react');
const ReactDOM = require('react-dom')
const Todo = require('./Todo.js')

class App extends React.Component{
  render() {
    return(<div>
  <h1>Hello React World!</h1>	    
  <Todo/>
  </div>)
  }
}

ReactDOM.render(<App/> , document.getElementById('root'))
