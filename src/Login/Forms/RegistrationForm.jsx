import React from "react";
import style from '../Login.module.css';
import {Formik} from "formik";

export const RegistrationForm = ({ registerSchema, navigate }) => {
    return(
        <Formik
            validationSchema={registerSchema}
            initialValues={{
                email: "",
                password: "",
                name: "",
                lastName: "",
                confirmPassword: ""
            }}
            validateOnBlur
            onSubmit={(values) => {
                console.log(values);
                // return navigate('/account');
                return navigate(`<Account
                    haveBot={false}
                    setHaveBot={setHaveBot}
                />`);
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
                <form id={'registerForm'} onSubmit={handleSubmit}>
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
                            id="registerEmail"
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
                                    id="registerPassword"
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
                            <button type={"submit"}>Регистрация</button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default RegistrationForm;