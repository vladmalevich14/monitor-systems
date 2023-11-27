import React from 'react';
import Logo from '../assets/svg/logo.svg'
import Avatar from '../assets/svg/avatar.svg'
import Bell from '../assets/svg/bell.svg'
import User from '../assets/svg/user.svg'
import ArrowDown from '../assets/svg/arrow-down.svg'
import Notifications from '../assets/svg/notifications.svg'
import s from './header.module.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

type PropsType = {
    isAuth?: boolean
}

export const Header = ({isAuth = true}: PropsType) => {
    const navigate = useNavigate()

    const onClickHandler = () => {
        if (isAuth) navigate('/user')
    }

    return (
        <div className={s.headerContainer}>
            <div>
                <a href="/account"><img src={Logo} alt='logo' className={s.logo}/></a>
            </div>

            <div className={s.linksContainer}>
                <a href="#">Меню</a>
                <a href="#">Вопросы и ответы</a>
                <a href="#">об АИС</a>
            </div>

            <div className={s.userContainer}>
                <div className={s.bellWrapper}>
                    {isAuth ? <a href="/"><img src={Notifications} alt='notifications' className={s.avatar}/></a>
                        : <a href="#"><img src={Bell} alt="bell" className={s.iconBorder}/></a>
                    }
                </div>

                <div className={s.userWrapper} onClick={onClickHandler}>
                    {isAuth ? <a href=""><img src={Avatar} alt='avatar' className={s.avatar}/></a>
                        : <a href=""><img src={User} alt="user" className={s.iconBorder}/></a>
                    }
                    <div>
                        <a href="" className={s.enterAccount}>
                            {isAuth ? 'Имя Фамилия' : 'Вход в аккаунт'}
                            <img src={ArrowDown} alt="arrow down"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}