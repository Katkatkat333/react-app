let store = {
    _state: {
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
            ],
            newMessageText: 'bla'
        },
        friends: {
            friendsData: [
                {id: 1, name: 'Anna', surname: 'Goroshko', avatar: 'https://avatanplus.com/files/effects/mid/5ed1143d9387817260b710a4.jpg'},
                {id: 2, name: 'Julia', surname: 'Surkova', avatar: 'https://i.pinimg.com/736x/ab/01/df/ab01dfc62541394a1c094d09fe64ecfb.jpg'},
                {id: 3, name: 'Anna', surname: 'Babko', avatar: 'https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profile.newPostText,
            likes: 0,
        };
        if (newPost.message) {
            this._state.profile.postData.push(newPost);
        }
        this._state.profile.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profile.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 100,
            text: this._state.dialogs.newMessageText,
        }
        if (newMessage.text) {
            this._state.dialogs.messagesData.push(newMessage);
        }
        this._state.dialogs.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogs.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store

export default store;