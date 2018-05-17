import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Posts from './Posts';

const Navigation = () => (
    <div className="App">
        <NavLink to="/" exact activeClass="active" activeStyle={{ color: 'red' }}> HOME </NavLink> |
        <NavLink to="/about" activeClass="active" activeStyle={{ color: 'red' }}> ABOUT </NavLink> |
        <NavLink to="/posts" activeClass="active" activeStyle={{ color: 'red' }}> POSTS </NavLink>

        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Route path="/about" render={props => (<div>Hello About</div>)} />
        <Route path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Posts} />
    </div>
);

export default Navigation;

