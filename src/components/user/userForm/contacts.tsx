import React from 'react';
import {Input} from "../../common/input/input";
import s from "components/user/userForm/user-info-form.module.css";
import {useState} from "react";

export const Contacts = () => {
    const [disabledInput, setDisabledInput] = useState<boolean>(true)

    const editHandler = () => {
        setDisabledInput(!disabledInput)
    }

    return <div className={s.blockContainer}>
        <div className={s.editWrapper}>
            <h3>Контакты</h3>
            <span onClick={editHandler} className={s.edit}>Редактировать</span>
        </div>
        <div className={s.inputsContainer}>
            <div className={s.inputWrapper}>
                <Input type={'text'} placeholder={'Введите email'} name={'email'} label={'Адресс электроной почты'} disabled={disabledInput}/>
            </div>

            <div className={s.inputWrapper}>
                <Input type={'text'} placeholder={'Введите мобильный номер'} name={'mobile'} label={'Мобильный номер'} disabled={disabledInput}/>
            </div>
        </div>
    </div>
}