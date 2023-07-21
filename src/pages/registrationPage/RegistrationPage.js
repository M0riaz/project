import {useNavigate} from 'react-router-dom';
import style from './RegistrationPage.module.css'

export const RegistrationPage = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/profile')
    }

    return (
        <section className={style.main}>
            <h1>Регистрация</h1>
            <form className={style.form} onSubmit={onSubmit}>
                <input placeholder='email'/>
                <input placeholder='Имя'/>
                <input placeholder='пароль'/>
                <button>Войти</button>
            </form>
        </section>
    )
}