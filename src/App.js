import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteContainer from './RouteContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouteContainer />
            </BrowserRouter>
        );
    }
}

export default App;
