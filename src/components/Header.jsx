import React from "react";
import header from './header.module.css'

const Header = () => {
    return (
        <header className={header.header}>
            <h1>My-social</h1>
            <div className={header.headerLinks}>
                <ul className={header.home}>
                    Home
            <div>
                        <li><a href='#'>Войти</a></li>
                        <li><a href='#'>Выйти из аккаунта</a></li>
                        <li><a href='#'>Новости</a></li>
                    </div>
                </ul>
                <ul className={header.settings}>
                    Настройки
            <div>
                        <li><a href='#'>Настройки профиля</a></li>
                        <li><a href='#'>Настройки контента</a></li>
                        <li><a href='#'>Пароль</a></li>
                        <li><a href='#'>Электронная почта</a></li>
                        <li><a href='#'>Номер телефона</a></li>
                        <li><a href='#'>Язык</a></li>
                    </div>
                </ul>
                <ul className={header.more}>
                    Дополнительно
                    <div>
                    <li><a href='#'>Ошибки</a></li>
                    <li><a href='#'>О социальной сети</a></li>
                    <li><a href='#'>Контакты</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Связаться с администрацией</a></li>
                    </div>
                </ul>
            </div>
        </header>
    )
};

export default Header;