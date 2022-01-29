import React from 'react';
import s from './MyProfile.module.css';

const MyProfile = (props) => {
    return (
        <div className={s.MyProfile}>
            <div className={s.avatar}></div>
            <div className={s.description}>
                <h2> Ivanova Kateryna</h2>
                <p> Date of birth: 3 May</p>
                <p> City: Kyiv</p>
                <p> Website: bkey.com.ua</p>
            </div>
        </div>
    )
}

export default MyProfile;