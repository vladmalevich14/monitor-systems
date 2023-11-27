import React from 'react';
import s from './user.module.css'
import ArrowLeft from "components/assets/svg/arrow-left.svg";
import ArrowLeftBlack from "components/assets/svg/arrow-left-black.svg";
import Avatar from "components/assets/svg/avatar.svg";
import {UserInfoForm} from "./userForm/user-info-form";

export const User = () => {
    return <div className={s.userContainer}>
        <div className={s.linkToMain}>
            <div className={s.linkContainer}>
                <img src={ArrowLeft} alt="arrow left"/>
                <a href="/account" className={s.linkBack}>Главная</a>
            </div>

            <div className={s.linkContainer}>
                <img src={ArrowLeftBlack} alt="arrow left"/>
                <a href="#" className={s.linkProfile}>Профиль</a>
            </div>
        </div>

        <div className={s.profileInfo}>
            <h1>Профиль</h1>
            <div className={s.info}>
                <img src={Avatar} alt="avatar" className={s.avatar}/>
                <h2 className={s.nameSurname}>
                    Имя Фамилия
                </h2>
                <div className={s.active}>
                    Активный
                </div>
                <div className={s.status}>
                    Пользователь
                </div>
            </div>
        </div>
        <UserInfoForm />
    </div>
}