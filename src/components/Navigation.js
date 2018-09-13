import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';

import User from './User';
import Post from './Post';

const Navigation = () => (
    <div className="App">
        <NavLink to="/users" exact activeClass="active" activeStyle={{ color: 'red' }}> USERS </NavLink> |
        <NavLink to="/posts" activeClass="active" activeStyle={{ color: 'red' }}> POSTS </NavLink> |

        <p className="App-intro">
            <p> DEMO APP TO SHOWCASE A Navigation Flow Where A Route Opens As A Modal From Different Pages.</p>
        </p>

        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />

        <Route path="/users/:id" component={User} />
        <Route path="/posts/:id" component={Post} />
    </div>
);

export default Navigation;

