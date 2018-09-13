import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Modal } from 'semantic-ui-react';


const usersData = [{
    id: 1,
    name: 'Homer Simpson',
    image: 'http://fillmurray.com/250/250',
    posts: [1, 3],
}, {
    id: 2,
    name: 'Moe Sizlak',
    image: 'http://fillmurray.com/200/250',
    posts: [2, 3],
}, {
    id: 3,
    name: 'Carl Carlson',
    image: 'http://fillmurray.com/350/250',
    posts: [1],
}, {
    id: 4,
    name: 'Lenny Leonard',
    image: 'http://fillmurray.com/250/350',
    posts: [3],
}];

const User = ({ history, match }) => {
    const user = usersData.find(u => u.id === parseInt(match.params.id, 10));

    return (
        <div>
            <Modal defaultOpen centered={false} onClose={() => { if (history.length > 2) { history.goBack(); } else { history.push('/users'); } }}>
                <Modal.Header>USER DETAIL: {user.name}</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size="medium" src={user.image} />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>{user.name} BELONGS TO:</p>
                        {user.posts.map(post => (<p><Link to={`/posts/${post}`}>Post {post}</Link></p>))}
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    );
};

export default User;
