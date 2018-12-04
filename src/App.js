import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        input: '',
        list: [],
        test: "Hello, I am a test!",
    }

    onChange = (e) => {
        console.log("**Turn to face the change**", this.state.input)
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
        console.log("submit was clicked")
    }

  render() {
      console.log("this is state " + this.state.input)
    return (
      <div className="App">
        <header className="App-header">
            <div>{this.state.test}</div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.input} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
        </header>
      </div>
    );
  }
}

export default App;
