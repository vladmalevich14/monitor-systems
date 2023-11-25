import {Input} from "components/common/input/input";
import s from 'components/user/userForm/user-info-form.module.css'

export const PersonalInformation = () => {
    return <div className={s.blockContainer}>
        <h3>Личные данные</h3>
        <div className={s.inputsContainer}>
            <div className={s.inputWrapper}>
                <Input type={'text'} name={'name'} placeholder={'Введите имя'} label={'Имя*'}/>
            </div>
            <div className={s.inputWrapper}>
                <Input type={'text'} name={'surname'} placeholder={'Введите фамилию'} label={'Фамилия*'}/>
            </div>
            <div className={s.inputWrapper}>
                <Input type={'text'} name={'patronymic'} placeholder={'Введите отчество'} label={'Отчество*'}/>
            </div>
            <div className={s.inputWrapper}>
                <Input type={'text'} name={'id'} placeholder={'Введите идентификационный номер'}
                       label={'Идентификационный номер*'}/>
            </div>
            <div className={s.inputWrapper}>
                <Input type={'text'} name={'login'} placeholder={'Введите логин'} label={'Логин*'}/>
            </div>

        </div>
    </div>
}