import React, {useState} from "react";
import style from './Account.module.css';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HaveNotTariff from "./Tariff/HaveNotTariff";
import HaveTariff from "./Tariff/HaveTariff";

const Account = () => {

    const [isLogin, setLogin] = useState(true);
    const [haveBot, setHaveBot] = useState(true);

    return (
        <div>
            <div className={style.acc__main}>
                <Navbar isLogin={isLogin} />
                <div className={style.acc__main_block}>
                    <h1>Привет, Анна!</h1>
                    { haveBot ? <HaveTariff /> : <HaveNotTariff /> }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Account;