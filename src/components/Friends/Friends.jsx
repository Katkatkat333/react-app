import React from 'react';
import s from './Friends.module.css';

const Friends = ({state}) => {

    let friendsElements = state.map((friend, index) => {
            return (
                <div key={index}>
                    <div className={s.avatar}>
                        <img className={s.friendAvatar} src={friend.avatar} alt=""/>
                    </div>
                    <div className={s.friendName}>
                        {friend.name} {friend.surname}
                    </div>
                </div>
            )
        }
    )

    return (
        <div >
            <h2 className={s.title}>My friends</h2>
            <div className={s.friends}>{friendsElements}</div>
        </div>
    )
}

export default Friends;