 import work from '../../images/work.jpg'
import style from './MainPage.module.css'


export const MainPage = () => {
    return (
        <section className={style.main}>
            <img className={style.img} src={work} alt='work'/>
        </section>
    )
}