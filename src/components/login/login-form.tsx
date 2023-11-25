import s from './login-form.module.css'
import {Input} from "components/common/input/input";

export const LoginForm = () => {

    const onSubmitHandler = (data: any) => {
        data.preventDefault()
    }

    return <div className={s.loginFormContainer}>
        <div className={s.loginFormWrapper}>
        <h1 className={s.formName}>Вход</h1>
        <form onSubmit={onSubmitHandler} className={s.form}>
            <Input name={'email'} placeholder={'Введите логин'} type={'email'} label={'Логин'}/>
            <Input name={'password'} placeholder={'Введите пароль'} type={'password'} label={'Пароль'}/>
            <input type="submit" value={'Вход'} className={s.submit}/>
            <button className={s.button}>Авторизация с использованием ЕС ИФЮЛ</button>
        </form>
        </div>
    </div>
}