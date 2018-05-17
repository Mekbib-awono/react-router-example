import React from 'react';
import { Link, Route } from 'react-router-dom';

const posts = [{
    id: 1,
    name: 'Initial post',
}, {
    id: 2,
    name: 'Second post',
}, {
    id: 3,
    name: 'More post',
}];

const Posts = () => (
    <div className="App">
        Posts..
        {posts.map(post => (<li><Link to={`post/${post.id}`}>{post.name}</Link></li>))}
    </div>
);

export default Posts;

