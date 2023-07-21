import calendar from '../../images/calendar.jpg'
import style from './CalendarPage.module.css'

export const CalendarPage = () => {
    return (
        <div className={style.main}>
            <img className={style.img} src={calendar} alt='calendar'/>
        </div>
    )
}