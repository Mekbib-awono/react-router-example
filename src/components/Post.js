import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Modal } from 'semantic-ui-react';

const Post = ({ history }) => (
    <div>
        <Modal defaultOpen centered={false} onClose={() => { if (history.length > 2) { history.goBack(); } else { history.push('/posts'); } }}>
            <Modal.Header>POST DETAIL</Modal.Header>
            <Modal.Content image>
                <Image wrapped size="medium" src="http://fillmurray.com/250/350" />
                <div>
                    <Header>Default Profile Image</Header>
                    <p>LIKED THIS POST:</p>
                    <div><Link to="/users/1"><h4>User 1</h4></Link><br />
                        <Link to="/users/2"> <h4>User 2</h4></Link>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    </div>
);

export default Post;
