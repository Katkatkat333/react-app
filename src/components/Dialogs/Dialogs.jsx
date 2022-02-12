import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({state, addMessage, newMessageText, updateNewMessageText}) => {

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map(message => <Message text={message.text} id={message.id}/>)

    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        addMessage();
        updateNewMessageText('');
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                <div className={s.messagesElements}>{messagesElements}</div>
                <div className={s.addMessage}>
                    <textarea cols="60" rows="4"
                              ref={newMessageElement}
                              className={s.newMessage}
                              value={newMessageText}
                              onChange={onMessageChange}
                    />
                    <button className={s.button} onClick={addNewMessage}>Send</button>
                </div>
            </div>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
        </div>
    )
}

export default Dialogs;