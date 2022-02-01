import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Nav = ({state}) => {

    let activeClassButton = ({isActive}) =>
        isActive ? `${s.link} ${s.activeLink}` : s.link

    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    <NavLink to="/profile" className={activeClassButton}> Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={activeClassButton}> Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={activeClassButton}> News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={activeClassButton}> Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" className={activeClassButton}> Settings </NavLink>
                </div>
            </div>
            <Friends state={state.friendsData}/>
        </nav>
    )
}

export default Nav;