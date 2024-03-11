import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';


function PostList({ isPosting, onStopPosting }) {
  const [post, setPost] = useState([]);

function addPostHandler(postData){
  setPost((existingPost)=>[postData, ...existingPost])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
    </>
      );
}

export default PostList;