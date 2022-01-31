import React from 'react';
import s from './Dialogs.module.css';
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

const Message = ({text}) => {
    return (
        <div className={s.message}>
            {text}
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Kate'},
        {id: 2, name: 'Dmytro'},
        {id: 3, name: 'Bohdan'},
        {id: 4, name: 'Julia'}
    ]

    let messagesData = [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Fine'},
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messagesData.map(message => <Message text={message.text} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
        </div>
    )
}

export default Dialogs;