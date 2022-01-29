import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="" className={`${s.link} ${s.active}`}> Profile</a>
            </div>
            <div className={s.item}>
                <a href="" className={s.link}> Messages</a>
            </div>
            <div className={s.item}>
                <a href="" className={s.link}> News</a>
            </div>
            <div className={s.item}>
                <a href="" className={s.link}> Music</a>
            </div>
            <div className={s.item}>
                <a href="" className={s.link}> Settings </a>
            </div>
        </nav>
    )
}

export default Nav;