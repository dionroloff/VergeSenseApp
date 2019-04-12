import React, { Component } from "react";
import { Divider } from "antd";
import axios from "axios";

import Graph from '../src/components/Graph';
import Calendar from './components/Calendar';
import "./App.css";

class App extends Component {

  componentDidMount() {
    axios
      .get("https://api.jsonbin.io/b/5cafaeb4c0338e327afea672")
      .then(response => {
        console.log(response);
        // this.setState({ideas: response.data})
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>VergeSense</h1>
        </header>
        {/* <Button type="primary" onClick={this.handleClick}>Hello</Button> */}
        {/* <Slider 
          range step={10} 
          defaultValue={[20, 50]} 
          onChange={onChange} 
          onAfterChange={onAfterChange} 
          /> */}
        <Calendar />
        <Divider/>
        <Graph/>
        
      </div>
    );
  }
}

export default App;
