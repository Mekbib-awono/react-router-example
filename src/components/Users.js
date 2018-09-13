import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const usersData = [{
    id: 1,
    name: 'Homer Simpson',
    pic: 'http://fillmurray.com/250/250',
}, {
    id: 2,
    name: 'Moe Sizlak',
    pic: 'http://fillmurray.com/200/250',
}, {
    id: 3,
    name: 'Carl Carlson',
    pic: 'http://fillmurray.com/350/250',
}, {
    id: 4,
    name: 'Lenny Leonard',
    pic: 'http://fillmurray.com/250/350',
}];

const Users = () =>
    (
        <div>
            <h4>USERS</h4>
            {usersData.map(user => (
                <div key={user.id}>
                    <h5><Link to={`/users/${user.id}`}>{user.name}</Link></h5>
                </div>))
            }
        </div>
    );


export default Users;
