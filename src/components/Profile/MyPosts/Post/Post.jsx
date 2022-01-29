import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://salvemusic.com.ua/wp-content/uploads/2020/02/ava-max-768x512.jpg" alt=""/>
            <p>{props.message} </p>
            <p>{props.likes} Likes</p>
        </div>
    )
}

export default Post;