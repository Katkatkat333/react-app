import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyPosts/MyProfile/MyProfile";

const Profile = ({state, addPost, updateNewPostText}) => {
    return (
        <div>
            <div className={s.banner}>
                <h1 className={s.title}> Little world in<br/>  Black&White</h1>
            </div>
            <MyProfile/>
            <MyPosts postData={state.postData} addPost={addPost} newPostText={state.newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;