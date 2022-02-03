import {rerenderEntireTree} from "../render";

let state = {
    profile: {
        postData: [
            {id: 1, message: 'Hello, My name is Kate', likes: 6},
            {id: 2, message: 'The London is a capital of Great Britain', likes: 100},
            {id: 3, message: 'hello world', likes: 2}
        ],
        newPostText: 'KATERYSHKA'
    },
    dialogs: {
        dialogsData: [
            {id: 1, name: 'Kate'},
            {id: 2, name: 'Dmytro'},
            {id: 3, name: 'Bohdan'},
            {id: 4, name: 'Julia'}
        ],
        messagesData: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'How are you? The London is a capital of Great Britain'},
            {id: 3, text: 'Fine'},
        ]
    },
    friends: {
        friendsData: [
            {id: 1, name: 'Anna', surname: 'Goroshko', avatar: 'https://avatanplus.com/files/effects/mid/5ed1143d9387817260b710a4.jpg'},
            {id: 2, name: 'Julia', surname: 'Surkova', avatar: 'https://i.pinimg.com/736x/ab/01/df/ab01dfc62541394a1c094d09fe64ecfb.jpg'},
            {id: 3, name: 'Anna', surname: 'Babko', avatar: 'https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg'},
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profile.newPostText,
        likes: 0,
    };

    state.profile.postData.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;