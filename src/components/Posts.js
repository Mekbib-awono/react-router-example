import React from 'react';
import { Link } from 'react-router-dom';

const postsData = [{
    id: 1,
    name: 'Springfield elementary',
}, {
    id: 2,
    name: 'Powerplant',
}, {
    id: 3,
    name: 'Moe\'s',
}];
const Posts = () => (
    <div>
        <h4>POSTS</h4>
        {postsData.map(post => (
            <div key={post.id}>
                <h5><Link to={`/posts/${post.id}`}>{post.name}</Link></h5>
            </div>))
        }
    </div>

);

export default Posts;
