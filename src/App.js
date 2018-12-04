import React, { Component } from 'react';
import './App.css';

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
        console.log("submit was clicked")
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <ul>
                {this.state.list.map((item, index)=> <li key={index}>{item}</li>)}
            </ul>
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
