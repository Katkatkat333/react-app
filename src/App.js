import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import classNames from "classnames";

const App = ({state, changeTheme, addPost, updateNewPostText, addMessage, updateNewMessageText}) => {
    return (
        <BrowserRouter>
            <div className={classNames('app-wrapper', {'darkTheme': state.theme === 'dark'})}>
                <Header theme={state.theme} changeTheme={changeTheme}/>
                <Nav state={state.friends}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile
                            state={state.profile}
                            addPost={addPost}
                            updateNewPostText={updateNewPostText}
                        />}/>
                        <Route path="/dialogs/*" element={<Dialogs
                            state={state.dialogs}
                            addMessage={addMessage}
                            updateNewMessageText={updateNewMessageText}
                            newMessageText={state.dialogs.newMessageText}
                        />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
