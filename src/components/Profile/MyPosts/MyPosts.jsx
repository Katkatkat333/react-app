import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <h2 className={s.title}>My posts</h2>
            <div className={s.AddPost}>
                <textarea cols="60" rows="4"></textarea>
                <button className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                New post
                <Post message='Hello, My name is Kate' likes='6'/>
                <Post message='The London is a capital of Great Britain' likes='100'/>
                <Post message='hello world' likes='2'/>
            </div>
        </div>
    )
}

export default MyPosts;