import React from 'react';
import {LoginForm} from "./login-form";
import ArrowLeft from '../assets/svg/arrow-left.svg'
import s from './login-form.module.css'
import {Header} from "components/header/header";
import {Footer} from "components/footer/footer";

export const Login = () => {

    return <div className={s.login}>
        <Header isAuth={false} />
        <div className={s.linkToMain}>
            <img src={ArrowLeft} alt="arrow left"/>
            <a href="#" className={s.linkBack}>Вернуться на главную</a>
        </div>
        <LoginForm/>
        <Footer />
    </div>
}