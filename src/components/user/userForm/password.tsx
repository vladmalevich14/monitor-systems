import React from 'react';
import s from "components/user/userForm/user-info-form.module.css";
import {useState} from "react";
import {Input} from "../../common/input/input";

export const Password = () => {
    const [disabledInput, setDisabledInput] = useState<boolean>(true)

    const editHandler = () => {
        setDisabledInput(!disabledInput)
    }

    return <div className={s.blockContainer}>
        <div className={s.editWrapper}>
            <h3>Пароль</h3>
            <span onClick={editHandler} className={s.edit}>Редактировать</span>
        </div>

        <div className={s.passwordsContainer}>
            <div className={s.inputWrapper}>
                <Input type={'password'} placeholder={'Введите текущий пароль'} name={'password'} label={'Текущий пароль'} disabled={disabledInput}/>
            </div>
            <div className={s.newPassword}>
            <div className={s.inputWrapper}>
                <Input type={'password'} placeholder={'Введите новый пароль'} name={'newPassword'} label={'Новый пароль'} disabled={disabledInput}/>
            </div>

            <div className={s.inputWrapper}>
                <Input type={'password'} placeholder={'Подтвердите пароль'} name={'confirmPassword'} label={'Подтвердите пароль'} disabled={disabledInput}/>
            </div>
            </div>
        </div>

    </div>
}