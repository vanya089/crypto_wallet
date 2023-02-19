import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Registration from "./components/registration/Registration";
import Profile from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Home/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Registration/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
