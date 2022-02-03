import React from 'react';
import s from './../Dialogs.module.css';

const Message = ({text}) => {
    return (
        <div>
            <div className={s.message}>
                {text}
            </div>
        </div>
    )
}

export default Message;