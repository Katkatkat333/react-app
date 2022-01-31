import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
        {id: 1, message: 'Hello, My name is Kate', likes: '6'},
        {id: 2, message: 'The London is a capital of Great Britain', likes: '100'},
        {id: 3, message: 'hello world', likes: '2'}
    ]

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

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
