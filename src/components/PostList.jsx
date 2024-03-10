import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost';
import {useState} from 'react'
import Modal from './Modal';


function PostList(){
    const[enteredBody, setEnteredBody] = useState('')
    const[enteredAuthor, setEnteredAuthor] = useState('')
    
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value)
    }
    
    return (
    <>
        <Modal>
            <NewPost 
            onBodychange={bodyChangeHandler} 
            onAuthorChange={authorChangeHandler} 
        />
        </Modal>
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author="Samuel" body="viva la roma"/>
        </ul>
    </>
);
}

export default PostList;