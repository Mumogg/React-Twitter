import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost';
import {useState} from 'react'

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
        <NewPost onBodychange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Samuel" body="viva la roma"/>
                <Post author="Genesis desgraciada" body="viva el alcohol"/>
            </ul>
    </>
);
}

export default PostList;