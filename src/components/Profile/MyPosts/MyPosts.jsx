import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({postData, addPost}) => {

    let postElements = postData.map(post => <Post id={post.id} message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.MyPosts}>
            <h2 className={s.title}>My posts</h2>
            <div className={s.AddPost}>
                <textarea cols="60" rows="4" ref={newPostElement} className={s.newPost}></textarea>
                <button className={s.button} onClick={addNewPost}>Add post</button>
            </div>
            <div className={s.posts}>
                New post
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;