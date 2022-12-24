import React, { useEffect } from 'react';
import MyButton from '../myButton/MyButton';
import './Header.css'
const tg = window.Telegram.WebApp
const Header = () => {

    useEffect(() => {
        tg.ready()
    }, [])
    const onClose = () => {
        tg.close()
    }
    return (
        <div className='header'>
            <MyButton onClick={onClose}>Закрыть</MyButton>
            <span className='username'>
                {tg.initDataUnsafe?.user?.username}
            </span>

        </div>
    );
};

export default Header;