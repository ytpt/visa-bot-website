import React from "react";
import '../../App.css';
import Header from "../Header/Header";
import Main from "./Main";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainPage = () => {
    return (
        <>
            <div className={'app__wrapper'}>
                <Navbar />
                <div className={'app__content'}>
                    <Header />
                    <Main />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainPage;