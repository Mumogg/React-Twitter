import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';


function PostList({isPosting, onStopPosting}){
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    
    

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
      }
    
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
      }
    
      return (
        <>
          {isPosting ? 
          <Modal onClose={onStopPosting}>
            <NewPost
              onBodyChange={bodyChangeHandler}
              onAuthorChange={authorChangeHandler}
              onCancel={onStopPosting}
            />
          </Modal> 
          : null} 

          <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Iori" body="Viva la roma" />
            <Post author="Desgraciada mayor" body="Viva el alcohol" />
          </ul>
        </>
      );
}

export default PostList;