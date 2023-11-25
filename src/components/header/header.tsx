import Logo from 'components/assets/svg/logo.svg'
import Bell from 'components/assets/svg/bell.svg'
import User from 'components/assets/svg/user.svg'
import ArrowDown from 'components/assets/svg/arrow-down.svg'
import s from './header.module.css'

export const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div>
                <a href="/"><img src={Logo} alt='logo' className={s.logo}/></a>
            </div>

            <div className={s.linksContainer}>
                <a href="#">Меню</a>
                <a href="#">Вопросы и ответы</a>
                <a href="#">об АИС</a>
            </div>

            <div className={s.userContainer}>
                <div className={s.bellWrapper}>
                    <a href="#"><img src={Bell} alt="bell" className={s.iconBorder}/></a>
                </div>

                <div className={s.userWrapper}>
                    <a href="#"><img src={User} alt="user" className={s.iconBorder}/></a>

                    <div>
                        <a href="#" className={s.enterAccount}>
                            Вход в аккаунт
                            <img src={ArrowDown} alt="arrow down"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}