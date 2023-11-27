import React from 'react';
import s from './login-form.module.css'
import {Input} from "../common/input/input";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {

    const navigate = useNavigate()

    const onSubmitHandler = (data: any) => {
        data.preventDefault()
        const loginData = {username: data.target[0].value, password: data.target[1].value}
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        };

        fetch('http://localhost:3001/login', requestOptions)
            .then(response => {
                if (response.ok) {
                    navigate('/account')
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .catch(error => console.error('Ошибка запроса:', error));
    }

    return <div className={s.loginFormContainer}>
        <div className={s.loginFormWrapper}>
            <h1 className={s.formName}>Вход</h1>
            <div className={s.hint}>
                <span>Логин: admin</span>
                <span>Пароль: 123</span>
            </div>
            <form onSubmit={onSubmitHandler} className={s.form}>
                <Input name={'username'} placeholder={'Введите логин'} type={'text'} label={'Логин'}/>
                <Input name={'password'} placeholder={'Введите пароль'} type={'password'} label={'Пароль'}/>
                <input type="submit" value={'Вход'} className={s.submit}/>
                <button className={s.button}>Авторизация с использованием ЕС ИФЮЛ</button>
            </form>
        </div>
    </div>
}