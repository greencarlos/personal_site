"use strict"
const React = require('react')

const style = {
  color: 'black',
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    },
    this.handleChange = (e) => {
      this.setState({
        content: e.target.value
      })
    },
    this.handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state)	
      console.log(state)   
      console.log(props)
    }
  }
  
  render() {
    return(
    <div>
  <form onSubmit={this.handleSubmit}>
    <label style={style}>Add new todo:</label>	    
    <input type="text" onChange={this.handleChange} value={this.state.content}/>
  </form>
    </div>
    )
  }
}

module.exports = AddTodo;
