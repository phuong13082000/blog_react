import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
            <Route path="/login" element={
                <>
                    <Title title="Login"/>
                    <Header/>
                    <Login/>
                    <Footer/>
                </>
            }/>
            <Route path="/register" element={
                <>
                    <Title title="Register"/>
                    <Header/>
                    <Register/>
                    <Footer/>
                </>
            }/>
            <Route path="*" element={
                <>
                    <Title title="404 Not Found"/>
                    <PageNotFound/>
                </>
            }/>
        </Routes>
    );
}

export default App;
