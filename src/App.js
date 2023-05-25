import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import {Title} from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Title title="Homepage"/>
                    <Header/>
                    <Homepage/>
                    <Footer/>
                </>
            }/>
            <Route path="/profile" element={
                <>
                    <Title title="Homepage"/>
                    <Header/>
                    <Profile/>
                    <Footer/>
                </>
            }/>
        </Routes>
    );
}

export default App;
