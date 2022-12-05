import React from "react";
import style from '../Login.module.css';
import Account from "../../ Components/Account/Account";
import vk from "../../img/vk-icon.svg";
import instagram from "../../img/instagram-icon.svg";
import telegram from "../../img/telegram-icon.svg";
import youtube from "../../img/youtube-icon.svg";
import facebook from "../../img/facebook-icon.svg";
import {Formik} from "formik";

const EnterForm = ({ loginSchema, haveBot, setHaveBot, navigate }) => {
    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={{
                email: "",
                password: ""
            }}
            validateOnBlur
            onSubmit={(values) => {
                console.log(values);
                return navigate('/account');
                // return <Account
                //     haveBot={haveBot}
                //     setHaveBot={setHaveBot}
                // />
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
              }) => (
                <form id={'enterForm'} onSubmit={handleSubmit}>
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
                            <button id={'enterBtn'} type={"submit"}>Войти</button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default EnterForm;