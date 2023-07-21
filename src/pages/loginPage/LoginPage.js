import style from './LoginPage.module.css'
import {useNavigate} from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/profile')
    }

    return (
        <section className={style.main} onSubmit={onSubmit}>
            <h1>Вход</h1>
            <form className={style.form} >
                <input
                    placeholder='email'
                />
                <input
                    placeholder='password'
                />
                <button type="submit">Войти</button>
            </form>
        </section>
    )
}