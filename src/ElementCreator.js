import React, { Component } from 'react';
import './App.css';

class ElementCreator extends Component {
  render() {
    return (
        <ul>
            {this.props.starTrek.map((item, index)=> <li key={index}>{item}</li>)}
        </ul>
    );
  }
}

export default ElementCreator;
