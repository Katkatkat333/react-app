import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = ({state, addPost, updateNewPostText}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state={state.friends}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile state={state.profile} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={state.dialogs}/>}/>
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
