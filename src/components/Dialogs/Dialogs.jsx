import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({state}) => {

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map(message => <Message text={message.text} id={message.id}/>)

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