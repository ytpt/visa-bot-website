import React, {useState} from "react";
import style from './Account.module.css';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HaveNotTariff from "./Tariff/HaveNotTariff";
import HaveTariff from "./Tariff/HaveTariff";

const Account = () => {

    const [isLogin, setLogin] = useState(true);
    const [haveBot, setHaveBot] = useState(true);
    const [username, setUsername] = useState('Маликова Анна');
    const [fathers, setFathers] = useState('Дмитриевна');
    const [email, setEmail] = useState(localStorage.getItem('newEmail'));

    const send = (e) => {
        // e.preventDefault();
        const form = e.target.parentNode.parentNode;
        const textarea = form.querySelector('textarea');
        textarea.addEventListener('change', () => {
            console.log(textarea.value);
        })
    }

    return (
        <div>
            <div className={style.acc__main}>
                <Navbar isLogin={isLogin} />
                <div className={style.acc__main_block}>
                    <h1>Привет, Анна!</h1>
                    { haveBot
                        ? <HaveTariff
                            username={username}
                            fathers={fathers}
                            email={email}
                            setEmail={setEmail}
                            send={send}
                        />
                        : <HaveNotTariff send={send} /> }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Account;