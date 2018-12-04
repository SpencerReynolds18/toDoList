import React, { Component } from 'react';
import './App.css';
import ElementCreator from './ElementCreator'

class App extends Component {
    state = {
        input: '',
        list: [],
        test: "Hello, I am a test!",
    }

    onChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({
            list: [...this.state.list, this.state.input],
            input: ''
        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h3>To Do List</h3>
            <ElementCreator starTrek={this.state.list}/>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.input} onChange={this.onChange}/>
                    <br/>
                    <button>Submit</button>
                </form>
        </header>
      </div>
    );
  }
}

export default App;
