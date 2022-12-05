import React, {useState} from "react";
import style from './Login.module.css';
import * as Yup from "yup";
import Footer from "../ Components/Footer/Footer";
import {useNavigate} from "react-router-dom";
import EnterForm from "./Forms/EnterForm";
import RegistrationForm from "./Forms/RegistrationForm";

const LoginPage = () => {

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .required("Это обязательное поле.")
            .email("Неверный формат почты."),
        password: Yup.string()
            .required("Это обязательное поле.")
            .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})", "Слишком легкий пароль.")
            .min(8, "Пароль должен содержать больше 8 символов."),
    });

    const registerSchema = Yup.object().shape({
        email: Yup.string()
            .required("Это обязательное поле.")
            .email("Неверный формат почты."),
        password: Yup.string()
            .required("Это обязательное поле.")
            .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})", "Слишком легкий пароль.")
            .min(8, "Пароль должен содержать больше 8 символов."),
        name: Yup.string()
            .required("Это обязательное поле."),
        lastName: Yup.string()
            .required("Это обязательное поле."),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Пароли должны совпадать.")
            .required("Это обязательное поле."),
    });

    const [hasAccount, setHasAccount] = useState(true);
    const [haveBot, setHaveBot] = useState(false);
    const navigate = useNavigate();

    const changeEnterType = () => {
       setHasAccount(!hasAccount);
    }

    return (
        <div className={style.login__wrapper}>
            <div className={style.login__header}>
                <h2>Войдите в систему или зарегистрируйтесь, если у вас ещё нет аккаунта.</h2>
            </div>
            <div className={style.login__content}>
                <div className={style.form}>
                    <div className={style.form__wrapper}>
                        <div className={style.form__buttons}>
                            {
                                (hasAccount)
                                    ? <>
                                        <button
                                            className={style.btn_active}
                                            onClick={changeEnterType}
                                            type="button">Вход
                                        </button>
                                        <button
                                            onClick={changeEnterType}
                                            type="button">Регистрация
                                        </button>
                                      </>
                                    : <>
                                        <button
                                            onClick={changeEnterType}
                                            type="button">Вход
                                        </button>
                                        <button
                                            className={style.btn_active}
                                            onClick={changeEnterType}
                                            type="button">Регистрация
                                        </button>
                                      </>
                            }
                        </div>
                            {
                                (hasAccount)
                                    ? <EnterForm
                                        loginSchema={loginSchema}
                                        haveBot={haveBot}
                                        setHaveBot={setHaveBot}
                                        navigate={navigate}
                                    />
                                    : <RegistrationForm
                                        registerSchema={registerSchema}
                                        navigate={navigate}
                                    />
                            }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage;