import React from 'react';
import Bank from '../assets/svg/bank.svg'
import Logo from '../assets/svg/logo.svg'
import s from './footer.module.css'
import {Partner} from "./partner";

export const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <div className={s.contactsContainer}>
                <div className={s.companyNameAndLogo}>
                    <img src={Logo} alt="logo" className={s.logo}/>
                    <p>
                        Автоматизированная информационная <br/>
                        система «Реестры»
                    </p>
                    <p>
                        © АИС «Реестры», 2022.<br/>
                        Все права защищены.
                    </p>
                </div>

                <div className={s.support}>
                    <h1>Техническая поддержка</h1>
                    <p>+375 25 111 22 33 </p>
                    <p>+375 29 222 44 55</p>
                    <p>dev@agsr.by</p>
                    <a href="#" className={s.connectSupport}>Связаться с поддержкой</a>
                </div>

                <div className={s.contacts}>
                    <h1>Контакты</h1>
                    <p>+375 33 112 22 45</p>
                    <p>+375 29 222 44 88</p>
                    <p>dev@agsr.by</p>
                    <p>г. Минск, ул. К.Цеткин, д. 24-705</p>
                </div>
            </div>

            <div className={s.partnersContainer}>
                <Partner logo={Bank} href={"https://brrb.by/"}/>
                <Partner name={'Условный партнёр'} href={"#"}/>
                <Partner name={'Условный партнёр'} href={"#"}/>
                <Partner name={'Условный партнёр'} href={"#"}/>
                <Partner name={'Условный партнёр'} href={"#"}/>

            </div>
            <div className={s.infoContainer}>
                <p>© АИС «Реестры»</p>
                <p>
                    Разработчк: ОАО «Агентство сервисизации и еинжиниринга» (г. Минск, ул. К.Цеткин, д.24–705
                    dev@agsr.by)
                </p>
            </div>
        </div>
    )
}