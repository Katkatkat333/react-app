import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    let activeClassButton = ({isActive}) =>
        isActive ? `${s.link} ${s.activeLink}` : s.link

    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + id} className={activeClassButton}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;