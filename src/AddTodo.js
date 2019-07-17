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
      hasError: false,
    },
    this.handleChange = (e) => {
      this.setState({
        content: e.target.value
      })
    },
    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)   
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    return(
    <div>
  <form onSubmit={this.handleSumbit}>
  <label style={style}>Add new todo:</label>	    
  <input type="text" onChange={this.handleChange}></input>
  </form>
    </div>
    )
  }
}

module.exports = AddTodo;
