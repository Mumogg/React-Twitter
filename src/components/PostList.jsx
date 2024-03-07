import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost';

function PostList(){
    return (
    <>
        <NewPost />
            <ul className={classes.posts}>
                <Post author="Sebastian" body="viva la liga"/>
                <Post author="Samuel" body="viva la roma"/>
                <Post author="Genesis desgraciada" body="viva el alcohol"/>
            </ul>
    </>
);
}

export default PostList;