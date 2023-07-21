import style from './appHeader.module.css'
import logo from '../../images/iconList.png'
import {Link} from 'react-router-dom';


function AppHeader() {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <img src={logo} alt="" />
                <nav className={style.nav}>
                    <Link to='/'>
                        <span className={style.item}> Домой </span>
                    </Link>
                    <Link to='/news'>
                        <span className={style.item}>Новости</span>
                    </Link>

                    <Link to='/about'>
                        <span className={style.item}> О нас</span>
                    </Link>

                </nav>
                <Link to='/calendar'>
                    <h1 className={style.header}> КАЛЕНДАРЬ ПОСЕВОВ</h1>
                </Link>

                <div className={style.personalArea}>
                    <Link to='/registration'>
                        <button className={style.button}><span className={style.personalAreaText}> Регистрация</span></button>
                    </Link>
                   <Link to='/login'>
                       <button className={style.button}><span className={style.personalAreaText}> Личный кабинет</span> </button>
                   </Link>

                </div>
            </div>

        </div>
    )
}

export default AppHeader