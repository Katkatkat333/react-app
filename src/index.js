import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 changeTheme={store.changeTheme.bind(store)}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
