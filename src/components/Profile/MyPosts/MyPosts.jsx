import React, {useState} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = ({postData, addPost, newPostText, updateNewPostText}) => {

    let postElements = postData.map(post => <Post id={post.id} message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        addPost();
        updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }

    const [postTextArea, setPostTextArea] = useState('');
    console.log('postTextArea: ', postTextArea)

    return (
        <div className={s.MyPosts}>
            <h2 className={s.title}>My posts</h2>
            <div className={s.AddPost}>
                <textarea cols="60" rows="4"
                          onChange={onPostChange}
                          /*onChange={() => {updateNewPostText(newPostElement.current.value)}}*/
                          /*onChange={(e) => {setPostTextArea(e.target.value)}}*/
                          value={newPostText}
                          /*value={postTextArea}*/
                          ref={newPostElement}
                          className={s.newPost}></textarea>
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