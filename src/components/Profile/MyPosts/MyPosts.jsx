import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({postData}) => {

    let postElements = postData.map(post => <Post id={post.id} message={post.message} likes={post.likes}/>)

    return (
        <div className={s.MyPosts}>
            <h2 className={s.title}>My posts</h2>
            <div className={s.AddPost}>
                <textarea cols="60" rows="4">Text</textarea>
                <button className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                New post
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;