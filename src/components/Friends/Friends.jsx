import React from 'react';
import s from './Friends.module.css';

const Friends = ({state}) => {

    let friendsElements = state.map((friend) => {
            return (
                <div>
                    <div className={s.avatar}>
                        <img className={s.friendAvatar} src={friend.avatar}/>
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