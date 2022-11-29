import React, {useState} from "react";
import style from './Login.module.css';
import { Formik } from "formik";
import * as Yup from "yup";
import Footer from "../ Components/Footer/Footer";
import vk from "../img/vk-icon.svg";
import instagram from "../img/instagram-icon.svg";
import telegram from "../img/telegram-icon.svg";
import youtube from "../img/youtube-icon.svg";
import facebook from "../img/facebook-icon.svg";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const schema = Yup.object().shape({
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

    const changeEnterType = () => {
        setHasAccount(!hasAccount);
    }

    const navigate = useNavigate();
    const enter = function() {
        navigate('/account');
    }

    return (
        <div className={style.login__wrapper}>
            <div className={style.login__header}>
                <h2>Войдите в систему или зарегистрируйтесь, если у вас ещё нет аккаунта.</h2>
            </div>
            <div className={style.login__content}>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        email: "",
                        password: "",
                        name: "",
                        lastName: "",
                        confirmPassword: ""
                    }}
                    validateOnBlur
                    onSubmit={(values) => {
                        console.log(values)}}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit
                      }) => (
                        <div className={style.form}>
                            <div className={style.form__wrapper}>
                                <div className={style.form__buttons}>
                                    {
                                        (hasAccount)
                                            ? <>
                                                <button
                                                    className={style.btn_active}
                                                    onClick={changeEnterType}
                                                    type="button">
                                                    Вход
                                                </button>
                                                <button onClick={changeEnterType} type="button">Регистрация</button>
                                              </>

                                            : <>
                                                <button onClick={changeEnterType} type="button">Вход</button>
                                                <button
                                                    className={style.btn_active}
                                                    onClick={changeEnterType}
                                                    type="button">
                                                    Регистрация
                                                </button>
                                              </>
                                    }
                                </div>
                                    {
                                        (hasAccount)
                                            ? <form id={'enterForm'} onSubmit={handleSubmit}>
                                                <div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        placeholder="Эл. почта"
                                                        id="enterEmail"
                                                    />
                                                    <p className="error">
                                                        {errors.email && touched.email && errors.email}
                                                    </p>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                        placeholder="Пароль"
                                                        id="enterPassword"
                                                    />
                                                    <p className="error">
                                                        {errors.password && touched.password && errors.password}
                                                    </p>
                                                    <div className={style.form__enter}>
                                                        <p>Войти с помощью соцсетей:</p>
                                                        <div className={style.form__social}>
                                                            <a><img src={vk} alt={'ВК'} width={27} height={26} /></a>
                                                            <a><img src={instagram} alt={'Инстаграм'} width={27} height={26} /></a>
                                                            <a><img src={telegram} alt={'Телеграм'} width={27} height={26} /></a>
                                                            <a><img src={youtube} alt={'Ютуб'} width={27} height={26} /></a>
                                                            <a><img src={facebook} alt={'Фэйсбук'} width={27} height={26} /></a>
                                                        </div>
                                                        <button id={'enterBtn'} type={"submit"} onClick={enter}>Войти</button>
                                                    </div>
                                                </div>
                                            </form>
                                            : <form id={'registrForm'} onSubmit={handleSubmit}>
                                                <div>
                                                    <div className={style.fullName}>
                                                        <div>
                                                            <input
                                                                type="name"
                                                                name="name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.name}
                                                                placeholder="Ваше имя"
                                                                id="name"
                                                            />
                                                            <p className="error">
                                                                {errors.name && touched.name && errors.name}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="lastName"
                                                                name="lastName"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.lastName}
                                                                placeholder="Ваша фамилия"
                                                                id="lastName"
                                                            />
                                                            <p className="error">
                                                                {errors.lastName && touched.lastName && errors.lastName}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        placeholder="Эл. почта"
                                                        id="registrEmail"
                                                    />
                                                    <p className="error">
                                                        {errors.email && touched.email && errors.email}
                                                    </p>
                                                    <div className={style.passwords}>
                                                        <div>
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.password}
                                                                placeholder="Пароль"
                                                                id="registrPassword"
                                                            />
                                                            <p className="error">
                                                                {errors.password && touched.password && errors.password}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="password"
                                                                name="confirmPassword"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.confirmPassword}
                                                                placeholder="Повторите пароль"
                                                                id="doublePassword"
                                                            />
                                                            <p className="error">
                                                                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={style.form__enter}>
                                                        <button type={"submit"} onClick={enter}>Регистрация</button>
                                                    </div>
                                                </div>
                                            </form>
                                    }
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage;