import React from "react";
import style from './Main.module.css';
import Title from "./Title/Title";
import Info from "./Info/Info";
import StepsBot from "./StepsBot/StepsBot";
import Options from "./Options/Options";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

const Main = () => {
    return (
        <div className={style.main}>
            <Title />
            <Info />
            <StepsBot />
            <div className={style.main__important} id={'important'}>
                <h2><span>* Важно *</span></h2>
                <h4>Бот уведомит об открытии новых дат и времени, но, перейти на сайт и нажать на "Записаться" ты должен САМ!</h4>
            </div>
            <Options />
            <About />
            <Contacts />
        </div>
    );
}

export default Main;