import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';
import {counterDefaultVal} from "./constants/counterDefaultVal";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <TeslaBattery counterDefaultVal={counterDefaultVal}/>
            </div>
        );
    }
}
export default App;
