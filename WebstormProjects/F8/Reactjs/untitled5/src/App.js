import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login/login";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/home";

function App() {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    );
}

export default App;
