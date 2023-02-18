import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Home/>
            <div className="content">

            </div>
        </div>
    );
}

export default App;
